interface TableRowProps {
  icon: React.ReactNode;
  label: string;
  info: string;
}
export default function TableRow({ icon, label, info }: TableRowProps) {
  return (
    <div className="flex flex-row py-4 border-t border-sky-900/50 justify-between">
      <div className="flex flex-row text-lg w-2/3">
        {icon}
        <div className="pl-1 text-sm">{label.toUpperCase()}:</div>
      </div>
      <div className="pl-4 text-sm text-right">{info}</div>
    </div>
  );
}
