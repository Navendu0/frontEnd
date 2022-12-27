import React, { useState } from 'react'
import CreateBrandCategory from '../MiniComponent/CreateBrandCategory'



function CreateCategory() {

  return (
    <div>
   
      {/*........ category section ........*/}
      <CreateBrandCategory  name={"Category"} type={"category"} />

      {/*........ brand section ........*/}

      <CreateBrandCategory  name={"Brand"} type={"brand"} />

    </div>
  )
}

export default CreateCategory