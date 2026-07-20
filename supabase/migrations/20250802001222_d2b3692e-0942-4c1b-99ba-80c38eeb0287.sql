-- Create whiteboard_objects table for storing whiteboard content
CREATE TABLE public.whiteboard_objects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  object_id TEXT NOT NULL UNIQUE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  object_data JSONB NOT NULL,
  object_type TEXT NOT NULL,
  position_x REAL NOT NULL DEFAULT 0,
  position_y REAL NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.whiteboard_objects ENABLE ROW LEVEL SECURITY;

-- Create policies for whiteboard objects
CREATE POLICY "Everyone can view whiteboard objects" 
ON public.whiteboard_objects 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own objects" 
ON public.whiteboard_objects 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own objects OR admin can update all" 
ON public.whiteboard_objects 
FOR UPDATE 
USING (
  auth.uid() = user_id OR 
  EXISTS (
    SELECT 1 FROM public.user_profiles 
    WHERE user_id = auth.uid() AND passport = 'НС0001'
  )
);

CREATE POLICY "Users can delete their own objects OR admin can delete all" 
ON public.whiteboard_objects 
FOR DELETE 
USING (
  auth.uid() = user_id OR 
  EXISTS (
    SELECT 1 FROM public.user_profiles 
    WHERE user_id = auth.uid() AND passport = 'НС0001'
  )
);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_whiteboard_objects_updated_at
BEFORE UPDATE ON public.whiteboard_objects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add to realtime publication for real-time updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.whiteboard_objects;
ALTER TABLE public.whiteboard_objects REPLICA IDENTITY FULL;