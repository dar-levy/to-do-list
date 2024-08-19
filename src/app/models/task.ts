export interface Task {
  id: string;
  description: string;
  created_at: number;
  isComplete: boolean;
  isEditing: boolean;
}
