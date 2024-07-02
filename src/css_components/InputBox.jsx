
export function InputBox({label, placeholder, onChange,prop}) {
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input type={prop} onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" required/>
    </div>
}