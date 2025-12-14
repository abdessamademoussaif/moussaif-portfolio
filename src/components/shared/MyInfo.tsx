import { ReactNode } from 'react';
const MyInfo = ({ text, icon }: { text: ReactNode; icon: ReactNode }) => (
  <div className="flex items-center gap-3 text-sm ">
    <span className="p-2 bg-muted rounded-full flex items-center justify-center">
      {icon}
    </span>

    <span className="truncate max-w-[180px]">
      {text}
    </span>
  </div>
);

export { MyInfo };