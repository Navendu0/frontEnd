import React, { useState } from "react";

function InputHelper({
    titile,
    hint,
    rowD,
    inputName,
    buttonNeed,
    value,
    setValue,
    list,
    save,
    deleteHighlight,
    inputType,
    isRequire
}) {

    

    return (
        <div className="grid  gap-6">
            <div className="col-span-3 sm:col-span-2">
                <label
                    htmlFor="company_website"
                    className="block text-sm font-medium text-gray-700"
                >
                    {titile}
                </label>
                <div
                    className={`mt-1 flex rounded shadow-lg  
                `}
                >
                   
                  {!inputType ? 
                   <textarea
                   spellCheck={false}
                        type="text"
                        rows={rowD || 1}
                        name="company_website"
                        id="company_website"
                        className="p-2
          border-gray-500
          focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm"
                        onChange={(e) =>
                            setValue({ ...value, [inputName]: e.target.value })
                        }
                        value={value?.[inputName]}
                        placeholder={hint}
                        required={isRequire}
                    /> : 
                       
                       <input
                        type="number"
                        rows={rowD || 1}
                        name="company_website"
                        id="company_website"
                        className="p-2
                        
          border-gray-500
          focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm"
                        onChange={(e) =>
                            setValue({ ...value, [inputName]: e.target.value })
                        }
                        value={value?.[inputName]}
                        placeholder={hint}
                        required
                    />

                     }

                    <button
                        disabled={value?.[inputName] ? false : true}
                        onClick={save}
                        className={` 
                        ${value?.[inputName] ? "bg-blue-500" : "bg-blue-300"}
                        shadow-md shadow-blue-500/50 text-white w-14 h-8 rounded-md 
                     ${buttonNeed ? "" : "hidden"} 
    `}
                    >
                        save
                    </button>
                </div>

                {/*........... conditionally button render............ */}

                {buttonNeed && (
                    <div
                        className="
                "
                    >

                        <ul className="space-y-1 max-w-lg list-disc list-inside text-black">
                            {list &&
                                list.map((props, index) => (
                                    <li key={index} className="flex justify-between">
                                        {"-> "}
                                        {props}

                                        <button
                                            onClick={() => deleteHighlight(index)}
                                            className=" bg-red-500 text-white p-1 rounded-md text-sm mt-1"
                                        >
                                            delete
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputHelper;
