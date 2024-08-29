import "../../index.css";

export function Selected({options,id}) {
    return (
      <>
        <div className="flex gap-2 my-10 lg:my-8 rounded-xl">
  
          <select id={id} className="w-full text-base shadow-md p-3 rounded-xl text-gray-400">
            <option value="">Category</option>
            {options.map((option) => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
          </select>
        </div>
      </>
    );
  }