import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Canvas as FabricCanvas, FabricObject, Rect, Circle, Textbox, PencilBrush, Path } from 'fabric';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface WhiteboardCanvasProps {
  selectedTool: 'select' | 'draw' | 'rectangle' | 'circle' | 'text';
  selectedColor: string;
  onObjectSelected: (object: FabricObject | null) => void;
}

interface WhiteboardObject {
  id: string;
  object_id: string;
  user_id: string;
  author_name: string;
  object_data: any;
  object_type: string;
  position_x: number;
  position_y: number;
  created_at: string;
  updated_at: string;
}

const WhiteboardCanvas: React.FC<WhiteboardCanvasProps> = ({
  selectedTool,
  selectedColor,
  onObjectSelected
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const { user, userProfile } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if user is admin
  useEffect(() => {
    setIsAdmin(userProfile?.passport === 'НС0001');
  }, [userProfile]);

  // Initialize canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 1200,
      height: 800,
      backgroundColor: '#ffffff',
    });

    // Manually create and assign the free drawing brush
    try {
      const pencilBrush = new PencilBrush(canvas);
      pencilBrush.color = selectedColor;
      pencilBrush.width = 3;
      canvas.freeDrawingBrush = pencilBrush;
      console.log('Free drawing brush manually created:', canvas.freeDrawingBrush);
    } catch (error) {
      console.error('Error creating pencil brush:', error);
    }

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  // Load existing objects from database
  const loadWhiteboardObjects = useCallback(async () => {
    if (!fabricCanvas) return;

    try {
      const { data, error } = await supabase
        .from('whiteboard_objects')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;

      fabricCanvas.clear();
      fabricCanvas.backgroundColor = '#ffffff';

      data?.forEach((obj: WhiteboardObject) => {
        const fabricObj = recreateFabricObject(obj);
        if (fabricObj) {
          fabricCanvas.add(fabricObj);
        }
      });

      fabricCanvas.renderAll();
    } catch (error) {
      console.error('Error loading whiteboard objects:', error);
      toast.error('Помилка завантаження дошки');
    }
  }, [fabricCanvas]);

  // Load objects when canvas is ready
  useEffect(() => {
    if (fabricCanvas) {
      loadWhiteboardObjects();
    }
  }, [fabricCanvas, loadWhiteboardObjects]);

  // Set up real-time subscription
  useEffect(() => {
    if (!fabricCanvas) return;

    const channel = supabase
      .channel('whiteboard-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'whiteboard_objects'
        },
        async (payload) => {
          console.log('Real-time update:', payload);
          
          if (payload.eventType === 'INSERT') {
            const existingObj = fabricCanvas.getObjects().find(
              obj => (obj as any).customId === payload.new.object_id
            );
            
            if (!existingObj) {
              const newObj = recreateFabricObject(payload.new as WhiteboardObject);
              if (newObj) {
                fabricCanvas.add(newObj);
                fabricCanvas.renderAll();
              }
            }
          } else if (payload.eventType === 'UPDATE') {
            console.log('Applying update for object:', payload.new.object_id, payload.new.object_data);
            const existingObj = fabricCanvas.getObjects().find(
              obj => (obj as any).customId === payload.new.object_id
            );
            if (existingObj) {
              if (fabricCanvas.getActiveObject() !== existingObj) {
                fabricCanvas.remove(existingObj);
                const updatedObj = recreateFabricObject(payload.new as WhiteboardObject);
                if (updatedObj) {
                  fabricCanvas.add(updatedObj);
                  fabricCanvas.renderAll();
                }
              }
            }
          } else if (payload.eventType === 'DELETE') {
            const existingObj = fabricCanvas.getObjects().find(
              obj => (obj as any).customId === payload.old.object_id
            );
            if (existingObj) {
              fabricCanvas.remove(existingObj);
              fabricCanvas.renderAll();
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fabricCanvas]);

  // Recreate fabric object from database data
  const recreateFabricObject = (obj: WhiteboardObject): FabricObject | null => {
    try {
      const data = obj.object_data;
      let fabricObj: FabricObject | null = null;

      switch (obj.object_type) {
        case 'rectangle':
          fabricObj = new Rect({
            left: obj.position_x,
            top: obj.position_y,
            fill: data.fill,
            width: data.width,
            height: data.height,
            stroke: data.stroke,
            strokeWidth: data.strokeWidth,
            scaleX: data.scaleX || 1,
            scaleY: data.scaleY || 1,
            angle: data.angle || 0,
          });
          break;
        
        case 'circle':
          fabricObj = new Circle({
            left: obj.position_x,
            top: obj.position_y,
            fill: data.fill,
            radius: data.radius,
            stroke: data.stroke,
            strokeWidth: data.strokeWidth,
            scaleX: data.scaleX || 1,
            scaleY: data.scaleY || 1,
            angle: data.angle || 0,
          });
          break;
        
        case 'text':
          fabricObj = new Textbox(data.text || '', {
            left: obj.position_x,
            top: obj.position_y,
            fill: data.fill,
            fontSize: data.fontSize || 16,
            fontFamily: data.fontFamily || 'Arial',
            scaleX: data.scaleX || 1,
            scaleY: data.scaleY || 1,
            angle: data.angle || 0,
            editable: true,
            selectable: true,
            evented: true,
            width: data.width || 100,
          });
          break;
        
        case 'path':
          if (data && data.path) {
            try {
              fabricObj = new Path(data.path, {
                left: obj.position_x,
                top: obj.position_y,
                fill: data.fill || '',
                stroke: data.stroke || '#000',
                strokeWidth: data.strokeWidth || 1,
                scaleX: data.scaleX || 1,
                scaleY: data.scaleY || 1,
                angle: data.angle || 0,
              });
            } catch (err) {
              console.error('Error creating path:', err);
              return null;
            }
          }
          break;
      }

      if (fabricObj) {
        (fabricObj as any).customId = obj.object_id;
        (fabricObj as any).authorName = obj.author_name;
        (fabricObj as any).createdAt = obj.created_at;
        (fabricObj as any).userId = obj.user_id;
        
        // Allow all objects to be selectable and evented for viewing details
        fabricObj.selectable = true;
        fabricObj.evented = true;
      }

      return fabricObj;
    } catch (error) {
      console.error('Error recreating fabric object:', error);
      return null;
    }
  };

  // Save object to database
  const saveObjectToDatabase = async (fabricObj: FabricObject, objectType: string) => {
    if (!user || !userProfile) return;

    try {
      const objectId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      (fabricObj as any).customId = objectId;
      (fabricObj as any).authorName = userProfile.surname;
      (fabricObj as any).createdAt = new Date().toISOString();
      (fabricObj as any).userId = user.id;

      fabricObj.selectable = true;
      fabricObj.evented = true;
      fabricObj.moveCursor = 'move';
      fabricObj.hoverCursor = 'move';

      const objectData = fabricObj.toObject([
        'left', 'top', 'width', 'height', 'fill', 'stroke', 'strokeWidth',
        'scaleX', 'scaleY', 'angle', 'radius', 'fontSize', 'fontFamily',
        'text', 'path', 'customId', 'authorName',
        'createdAt', 'userId'
      ]);
      console.log('Saving object with data:', objectData);

      const { error } = await supabase
        .from('whiteboard_objects')
        .insert({
          object_id: objectId,
          user_id: user.id,
          author_name: `${userProfile.surname}`,
          object_data: objectData,
          object_type: objectType,
          position_x: fabricObj.left || 0,
          position_y: fabricObj.top || 0,
        });

      if (error) throw error;

    } catch (error) {
      console.error('Error saving object:', error);
      toast.error('Помилка збереження об\'єкту');
    }
  };

  // Update object in database
  const updateObjectInDatabase = async (fabricObj: FabricObject) => {
    const customId = (fabricObj as any).customId;
    if (!customId) return;

    try {
      const objectData = fabricObj.toObject([
        'left', 'top', 'width', 'height', 'fill', 'stroke', 'strokeWidth',
        'scaleX', 'scaleY', 'angle', 'radius', 'fontSize', 'fontFamily',
        'text', 'path', 'customId', 'authorName',
        'createdAt', 'userId'
      ]);
      console.log('Updating object with data:', objectData);

      const { error } = await supabase
        .from('whiteboard_objects')
        .update({
          object_data: objectData,
          position_x: fabricObj.left || 0,
          position_y: fabricObj.top || 0,
          updated_at: new Date().toISOString(),
        })
        .eq('object_id', customId);

      if (error) throw error;
    } catch (error) {
      console.error('Error updating object:', error);
      toast.error('Помилка оновлення об\'єкту');
    }
  };

  // Delete object from database
  const deleteObjectFromDatabase = async (fabricObj: FabricObject) => {
    const customId = (fabricObj as any).customId;
    if (!customId) return;

    try {
      const { error } = await supabase
        .from('whiteboard_objects')
        .delete()
        .eq('object_id', customId);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting object:', error);
      toast.error('Помилка видалення об\'єкту');
    }
  };

  // Handle tool changes
  useEffect(() => {
    if (!fabricCanvas) return;

    console.log('Selected tool:', selectedTool);
    
    fabricCanvas.off('mouse:down');

    fabricCanvas.isDrawingMode = selectedTool === 'draw';
    
    console.log('Drawing mode set to:', fabricCanvas.isDrawingMode);
    console.log('Free drawing brush exists:', !!fabricCanvas.freeDrawingBrush);
    
    if (selectedTool === 'draw') {
      if (fabricCanvas.freeDrawingBrush) {
        fabricCanvas.freeDrawingBrush.color = selectedColor;
        fabricCanvas.freeDrawingBrush.width = 3;
        console.log('Free drawing brush configured with color:', selectedColor);
      } else {
        console.error('Free drawing brush is still null after manual creation!');
        try {
          const pencilBrush = new PencilBrush(fabricCanvas);
          pencilBrush.color = selectedColor;
          pencilBrush.width = 3;
          fabricCanvas.freeDrawingBrush = pencilBrush;
          console.log('Emergency brush creation successful');
        } catch (error) {
          console.error('Emergency brush creation failed:', error);
        }
      }
      return;
    }

    if (['rectangle', 'circle', 'text'].includes(selectedTool)) {
      const handleCanvasClick = (e: any) => {
        const pointer = fabricCanvas.getPointer(e.e);
        let newObj: FabricObject | null = null;

        switch (selectedTool) {
          case 'rectangle':
            newObj = new Rect({
              left: pointer.x - 50,
              top: pointer.y - 25,
              fill: selectedColor,
              width: 100,
              height: 50,
              stroke: '#000',
              strokeWidth: 1,
            });
            break;
          
          case 'circle':
            newObj = new Circle({
              left: pointer.x - 25,
              top: pointer.y - 25,
              fill: selectedColor,
              radius: 25,
              stroke: '#000',
              strokeWidth: 1,
            });
            break;
          
          case 'text':
            newObj = new Textbox('Текст', {
              left: pointer.x,
              top: pointer.y,
              fill: selectedColor,
              fontSize: 16,
              fontFamily: 'Arial',
              editable: true,
              selectable: true,
              evented: true,
              width: 100,
            });
            break;
        }

        if (newObj) {
          newObj.selectable = true;
          newObj.evented = true;
          newObj.moveCursor = 'move';
          newObj.hoverCursor = 'move';
          
          fabricCanvas.add(newObj);
          fabricCanvas.setActiveObject(newObj);
          fabricCanvas.renderAll();
          saveObjectToDatabase(newObj, selectedTool);
        }
      };

      fabricCanvas.on('mouse:down', handleCanvasClick);
      
      return () => {
        fabricCanvas.off('mouse:down', handleCanvasClick);
      };
    }
  }, [fabricCanvas, selectedTool, selectedColor, user, userProfile]);

  // Handle object events
  useEffect(() => {
    if (!fabricCanvas) return;

    const handleObjectModified = async (e: any) => {
      const obj = e.target;
      if (obj && (obj as any).customId) {
        const userId = (obj as any).userId;
        const canModify = isAdmin || userId === user?.id;
        if (!canModify) {
          toast.error('Ви можете редагувати тільки свої об\'єкти');
          // Revert changes by reloading the object from the database
          const { data, error } = await supabase
            .from('whiteboard_objects')
            .select('*')
            .eq('object_id', (obj as any).customId)
            .single();
          if (data && !error) {
            fabricCanvas.remove(obj);
            const restoredObj = recreateFabricObject(data);
            if (restoredObj) {
              fabricCanvas.add(restoredObj);
              fabricCanvas.renderAll();
            }
          }
          return;
        }
        console.log('Object modified event fired:', obj, 'customId:', (obj as any).customId);
        updateObjectInDatabase(obj);
      }
    };

    const handleObjectMoving = (e: any) => {
      const obj = e.target;
      const userId = (obj as any).userId;
      const canModify = isAdmin || userId === user?.id;
      if (!canModify) {
        // Prevent moving by resetting position
        obj.set({ left: obj.left, top: obj.top });
        fabricCanvas.renderAll();
        return;
      }
      console.log('Object moving:', obj.left, obj.top);
    };

    const handleObjectScaling = (e: any) => {
      const obj = e.target;
      const userId = (obj as any).userId;
      const canModify = isAdmin || userId === user?.id;
      if (!canModify) {
        // Prevent scaling by resetting scale
        obj.set({ scaleX: obj.scaleX, scaleY: obj.scaleY });
        fabricCanvas.renderAll();
        return;
      }
      console.log('Object scaling:', obj.scaleX, obj.scaleY);
    };

    const handleMouseUp = (e: any) => {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject && (activeObject as any).customId) {
        const userId = (activeObject as any).userId;
        const canModify = isAdmin || userId === user?.id;
        if (!canModify) {
          return;
        }
        console.log('Mouse up on object with customId, updating database');
        updateObjectInDatabase(activeObject);
      }
    };

    const handleSelectionUpdated = (e: any) => {
      const obj = e.selected?.[0];
      if (obj) {
        // Update toolbar with new object's details
        onObjectSelected(obj);
        const userId = (obj as any).userId;
        const canModify = isAdmin || userId === user?.id;
        if (canModify && (obj as any).customId) {
          console.log('Selection updated, saving object');
          updateObjectInDatabase(obj);
        }
      }
    };

    const handlePathCreated = (e: any) => {
      const path = e.path;
      if (path && user && userProfile) {
        console.log('Path created, saving to database');
        
        const objectId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        (path as any).customId = objectId;
        (path as any).authorName = userProfile.surname;
        (path as any).createdAt = new Date().toISOString();
        (path as any).userId = user.id;

        path.selectable = true;
        path.evented = true;
        path.moveCursor = 'move';
        path.hoverCursor = 'move';

        saveObjectToDatabase(path, 'path');
      }
    };

    const handleSelectionCreated = (e: any) => {
      onObjectSelected(e.selected[0] || null);
    };

    const handleSelectionCleared = () => {
      onObjectSelected(null);
    };

    const handleTextChanged = async (e: any) => {
      const obj = e.target;
      if (obj && (obj as any).customId) {
        const userId = (obj as any).userId;
        const canModify = isAdmin || userId === user?.id;
        if (!canModify) {
          toast.error('Ви можете редагувати тільки свої об\'єкти');
          // Revert text changes by reloading the object from the database
          const { data, error } = await supabase
            .from('whiteboard_objects')
            .select('*')
            .eq('object_id', (obj as any).customId)
            .single();
          if (data && !error) {
            fabricCanvas.remove(obj);
            const restoredObj = recreateFabricObject(data);
            if (restoredObj) {
              fabricCanvas.add(restoredObj);
              fabricCanvas.renderAll();
            }
          }
          return;
        }
        console.log('Text changed, new text:', obj.text, 'customId:', (obj as any).customId);
        updateObjectInDatabase(obj);
      }
    };

    const handleDoubleClick = (e: any) => {
      const obj = e.target;
      if (obj && obj.type === 'textbox' && (isAdmin || (obj as any).userId === user?.id)) {
        fabricCanvas.setActiveObject(obj);
        obj.enterEditing();
        fabricCanvas.requestRenderAll();
      }
    };

    fabricCanvas.on('object:modified', handleObjectModified);
    fabricCanvas.on('object:moving', handleObjectMoving);
    fabricCanvas.on('object:scaling', handleObjectScaling);
    fabricCanvas.on('mouse:up', handleMouseUp);
    fabricCanvas.on('selection:updated', handleSelectionUpdated);
    fabricCanvas.on('path:created', handlePathCreated);
    fabricCanvas.on('selection:created', handleSelectionCreated);
    fabricCanvas.on('selection:cleared', handleSelectionCleared);
    fabricCanvas.on('text:changed', handleTextChanged);
    fabricCanvas.on('mouse:dblclick', handleDoubleClick);

    return () => {
      fabricCanvas.off('object:modified', handleObjectModified);
      fabricCanvas.off('object:moving', handleObjectMoving);
      fabricCanvas.off('object:scaling', handleObjectScaling);
      fabricCanvas.off('mouse:up', handleMouseUp);
      fabricCanvas.off('selection:updated', handleSelectionUpdated);
      fabricCanvas.off('path:created', handlePathCreated);
      fabricCanvas.off('selection:created', handleSelectionCreated);
      fabricCanvas.off('selection:cleared', handleSelectionCleared);
      fabricCanvas.off('text:changed', handleTextChanged);
      fabricCanvas.off('mouse:dblclick', handleDoubleClick);
    };
  }, [fabricCanvas, onObjectSelected, user, userProfile, isAdmin]);

  // Handle delete key
  useEffect(() => {
    if (!fabricCanvas) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete') {
        const activeObject = fabricCanvas.getActiveObject();
        if (activeObject) {
          const userId = (activeObject as any).userId;
          const canDelete = isAdmin || userId === user?.id;
          
          if (canDelete) {
            fabricCanvas.remove(activeObject);
            fabricCanvas.renderAll();
            deleteObjectFromDatabase(activeObject);
          } else {
            toast.error('Ви можете видаляти тільки свої об\'єкти');
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fabricCanvas, isAdmin, user]);

  return (
    <div className="flex justify-center items-center bg-gray-50 p-4 rounded-lg">
      <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-x-auto overflow-y-hidden max-w-full">
        <canvas ref={canvasRef} className="block" />
      </div>
    </div>
  );
};

export default WhiteboardCanvas;