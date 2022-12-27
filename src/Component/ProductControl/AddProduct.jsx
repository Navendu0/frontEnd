import React, { useState } from "react";
import loadingState from "../../Hooks/Loading";
import categoryNbrandHooks from "../../Hooks/ProductControl/CategoryNdBrand";
import imageHelperHook from "../../Hooks/ProductControl/ImageHelperHooks";
import inputFieldHook from "../../Hooks/ProductControl/InputFieldHooks";
import productSave from "../../Hooks/ProductControl/ProductSave";
import DropDownHelper from "../MiniComponent/DropDownHelper";
import InputHelper from "../MiniComponent/InputHelper";
import PopupModal from "../MiniComponent/PopupModal";

function AddProduct() {

  const [loading, image, setImage, imageCompress] = imageHelperHook()

  const [inputText, setInputText, initialValue, saveHighlightArray, deleteHighlight, saveYoutubeLink, deleteYoutubeLink] =
    inputFieldHook();


  const [type, setType] = useState()

  const [showModal, setShowModal] = React.useState(false);

  const [categoryList, brandList, saveCategoryOrBrand] = categoryNbrandHooks(type, setShowModal, inputText)

  const [uploadImages] = productSave(image, inputText, setInputText, setImage, initialValue)



  const [loading2, changeLoading] = loadingState()

  const [showFull,setShowFull] = useState(false)

  const saveProduct = (e) => {
    e.preventDefault()
    if (!inputText.categoryName) {
      return alert("please select a Category before proceed")

    }

    if (!inputText.brandName) {
      return alert("please select a Brand before proceed")
    }

    if (inputText.highLightTextArray.length == 0) {
      return alert("please add some Highlight about your product")
    }

    if (inputText.youtubeLinkArray.length == 0) {
      return alert("please add some Highlight about your product")
    }


    uploadImages()
  }

console.log(showFull)



  return (
    <div className="container max-h-screen overflow-y-auto addProductScroll">

      <h1 class=" text-center mt-4
     text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-sky-300"> Add Product </span> </h1>

      <div className="grid  gap-6 mb-6 ">
        <form onSubmit={saveProduct}>

          <div className="">

            <PopupModal showModal={showModal} setShowModal={setShowModal} type={type} inputText={inputText} setInputText={setInputText} save={saveCategoryOrBrand} />

            <div className="md:mt-0 md:col-span-2 ">
              <div>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6 ">
                    {/* .............. product name ....... */}

                    <InputHelper
                      titile={"Product Name"}
                      hint={"Enter Product Name"}
                      setValue={setInputText} // for set input value
                      value={inputText}
                      inputName={"name"}
                      isRequire={true}
                    />

                    {/* .............. product Price ....... */}

                    <InputHelper
                      titile={"Product price"}
                      hint={"Enter Product Price"}
                      setValue={setInputText} // for set input value
                      value={inputText}
                      inputName={"price"}
                      inputType={true}
                      isRequire={true}
                    />

                    {/* ............. Category and Brand ................ */}

                    <div className="grid grid-cols-1 space-x-2 space-y-2 sm:space-y-0 sm:grid-cols-2  ">

                      <DropDownHelper type={"category"} list={categoryList} setShowModal={setShowModal}
                        setType={setType}
                        inputText={inputText}
                        setInputText={setInputText}
                      />

                      <DropDownHelper type={"brand"} list={brandList} setShowModal={setShowModal}
                        setType={setType}
                        inputText={inputText}
                        setInputText={setInputText}
                      />


                    </div>

                    {/* ..............Product Description....... */}
                    <InputHelper
                      titile={"Description"}
                      hint={"enter Product Details briefly"}
                      rowD={2}
                      setValue={setInputText} // for set input value
                      value={inputText}
                      inputName={"description"}
                      isRequire={true}
                    />

                    {/*.......... product highlights....... */}

                    <InputHelper
                      titile={"Product HighLight"}
                      hint={"Enter short Highlight About product"}
                      buttonNeed={true}
                      list={inputText?.highLightTextArray} // list of highlighted text
                      save={saveHighlightArray} // this is save fun
                      setValue={setInputText} // for set input value
                      deleteHighlight={deleteHighlight}
                      value={inputText}
                      inputName={"highLightText"}
                      isRequire={
                        (inputText.highLightTextArray.length == 0) ? true : false
                      }
                    />



                    {/*.......... Youtube Links....... */}

                    <InputHelper
                      titile={"Youtube Links"}
                      hint={"Enter Youtube Link"}
                      buttonNeed={true}
                      list={inputText?.youtubeLinkArray} // list of highlighted text
                      save={saveYoutubeLink} // this is save fun
                      setValue={setInputText} // for set input value
                      deleteHighlight={deleteYoutubeLink}
                      value={inputText}
                      inputName={"youtubeLinkText"}
                      isRequire={
                        (inputText.youtubeLinkArray.length == 0) ? true : false
                      }
                    />



                    {/* ..............select images....... */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Product photo

                        {loading ? "   loading...." : ""}
                      </label>
                      <div className="fixed text-left p-2"></div>
                      <div
                        className=" flex mt-1 p-2 border-2 border-gray-300 border-dashed rounded-md h-[30vh] 
           
            "
                      >
                        <div className="flex space-x-1  overflow-x-scroll proPhoto">
                          {image &&
                            image.map((props, index) => (
                              <img key={index}
                                onClick={() => setShowFull(!showFull)}
                                className="h-[28vh] w-[40vw] sm:w-[20vw] rounded cursor-pointer"
                                src={URL.createObjectURL(props)}
                                style={{ objectFit: showFull ? "contain" : "cover" }}
                              />
                            ))}
                        </div>
                        <div
                          className={`${image.length == 0 && "flex justify-center w-full "
                            } p-4 `}
                        >
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="True"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>

                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className=" cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>chose Photos</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  multiple
                                  accept="image/*"
                                  className="sr-only"
                                  onChange={imageCompress}
                                />
                              </label>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG up to 5MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* .............. submit button ....... */}

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      disabled={loading ? true : false}
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {loading ? "wait.." : "save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
