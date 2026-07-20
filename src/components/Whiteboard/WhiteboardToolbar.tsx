import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MousePointer, 
  Pen, 
  Square, 
  Circle, 
  Type, 
  Trash2,
  Download,
  Upload
} from 'lucide-react';
import { FabricObject } from 'fabric';

interface WhiteboardToolbarProps {
  selectedTool: 'select' | 'draw' | 'rectangle' | 'circle' | 'text';
  selectedColor: string;
  onToolChange: (tool: 'select' | 'draw' | 'rectangle' | 'circle' | 'text') => void;
  onColorChange: (color: string) => void;
  onClearCanvas: () => void;
  selectedObject: FabricObject | null;
}

const colors = [
  '#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', 
  '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#FFC0CB',
  '#A52A2A', '#808080', '#FFFFFF'
];

const WhiteboardToolbar: React.FC<WhiteboardToolbarProps> = ({
  selectedTool,
  selectedColor,
  onToolChange,
  onColorChange,
  onClearCanvas,
  selectedObject
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mb-4">
      <div className="flex flex-wrap items-center gap-4">
        {/* Tools */}
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-medium">Інструменти:</span>
          <div className="flex gap-1">
            <Button
              variant={selectedTool === 'select' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onToolChange('select')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <MousePointer className="w-4 h-4" />
            </Button>
            <Button
              variant={selectedTool === 'draw' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onToolChange('draw')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Pen className="w-4 h-4" />
            </Button>
            <Button
              variant={selectedTool === 'rectangle' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onToolChange('rectangle')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Square className="w-4 h-4" />
            </Button>
            <Button
              variant={selectedTool === 'circle' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onToolChange('circle')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Circle className="w-4 h-4" />
            </Button>
            <Button
              variant={selectedTool === 'text' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onToolChange('text')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Type className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-medium">Колір:</span>
          <div className="flex gap-1 flex-wrap">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => onColorChange(color)}
                className={`w-6 h-6 rounded border-2 transition-transform hover:scale-110 ${
                  selectedColor === color ? 'border-white scale-110' : 'border-gray-400'
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onClearCanvas}
            className="bg-red-500/20 border-red-300/50 text-white hover:bg-red-500/30"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Очистити
          </Button>
        </div>

        {/* Selected Object Info */}
        {selectedObject && (
          <div className="flex items-center gap-2 ml-auto">
            <Badge variant="secondary" className="bg-festival-yellow text-festival-blue">
              Автор: {(selectedObject as any).authorName || 'Невідомо'}
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white">
              {new Date((selectedObject as any).createdAt || Date.now()).toLocaleDateString('uk-UA')}
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhiteboardToolbar;