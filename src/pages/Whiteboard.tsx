import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, LogOut, FileUser } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import WhiteboardCanvas from '@/components/Whiteboard/WhiteboardCanvas';
import WhiteboardToolbar from '@/components/Whiteboard/WhiteboardToolbar';
import { FabricObject } from 'fabric';
import { toast } from 'sonner';

const Whiteboard = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [selectedTool, setSelectedTool] = useState<'select' | 'draw' | 'rectangle' | 'circle' | 'text'>('select');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedObject, setSelectedObject] = useState<FabricObject | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleClearCanvas = () => {
    toast.info('Ви не можете очищати дошку');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-yellow/20">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Спільна дошка</h1>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => navigate('/cabinet')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <FileUser className="w-4 h-4 mr-2" />
              Кабінет
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Home className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="bg-red-500/20 border-red-300/50 text-white hover:bg-red-500/30"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Notice Message */}
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-7xl mx-auto bg-red-500/30 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white/90 text-center">
            <p className="font-semibold">Увага! На мобільних телефонах краще використовувати альбомну орієнтацію екрану</p>
          </div>
        </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Description */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Інструкції</h2>
            <div className="text-white/90 space-y-2">
              <p>• Виберіть інструмент та колір для роботи з дошкою</p>
              <p>• Натисніть на дошку, щоб створити об'єкт вибраним інструментом</p>
              <p>• Виберіть інструмент "вибір\зміна", щоб редагувати об'єкт. Клікніть на об'єкт, щоб вибрати його</p>
              <p>• Ви можете змінювати та видаляти тільки свої об'єкти</p>
              <p>• Для видалення об'єкту виберіть його та натисніть Delete</p>
              <p>• Всі зміни автоматично синхронізуються з іншими користувачами</p>
            </div>
          </div>

          {/* Toolbar */}
          <WhiteboardToolbar
            selectedTool={selectedTool}
            selectedColor={selectedColor}
            onToolChange={setSelectedTool}
            onColorChange={setSelectedColor}
            onClearCanvas={handleClearCanvas}
            selectedObject={selectedObject}
          />

          {/* Canvas */}
          <div className="w-full overflow-x-auto bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6">
            <div className="min-w-[1200px]">
              <WhiteboardCanvas
                selectedTool={selectedTool}
                selectedColor={selectedColor}
                onObjectSelected={setSelectedObject}
              />
            </div>
          </div>

          {/* Instructions for object management */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Інструменти</h3>
            <div className="text-white/90 text-sm space-y-1">
              <p>• <strong>Вибір\зміна:</strong> Натисніть на об'єкт щоб його вибрати. Ви можете міняти розміри, крутити об'єкт або переміщувати його</p>
              <p>• <strong>Малювання:</strong> Дозволяє вільно малювати на дошці</p>
              <p>• <strong>Прямокутник:</strong> Створює прямокутник</p>
              <p>• <strong>Коло:</strong> Створює коло</p>
              <p>• <strong>Текст:</strong> Створює бокс із текстом. Щоб редагувати текст, виберіть інструмент "Вибір\зміна" та клацніть на тексті два рази</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;