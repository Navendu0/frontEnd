import React from 'react'
import allProduct from '../../Hooks/ProductControl/AllPRoduct'

function AllProduct() {
  const [products,deleteProduct] = allProduct()

  return (
    <div className='grid grid-cols-1'>
      <h1 className=' md:h-[8vh] text-center mt-4 md:mb-3
     text-3xl font-extrabold  md:text-5xl  text-transparent bg-clip-text bg-gradient-to-r  from-slate-400 to-gray-500'>
        All Products
      </h1>
      <div className="overflow-x-auto  mt-2 rounded-md  ">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-slate-400  ">
            <tr>
              <th scope="col" className="py-3 px-4">
                Name
              </th>
              <th scope="col" className="py-3 px-4">
                price
              </th>
              <th scope="col" className="py-3 px-4">
                category
              </th>
              <th scope="col" className="py-3 px-4">
                brand
              </th>
              <th scope="col" className="py-3 px-4">
                description
              </th>
              <th scope="col" className="py-3 px-4">
                highlights
              </th>
              <th scope="col" className="py-3 px-4">
                Youtube links
              </th>
              <th scope="col" className="py-3 px-4">
                images
              </th>

              <th scope="col" className="py-3 px-4">
                action
              </th>
            </tr>
          </thead>
          <tbody>

            {
              products && products.map((props, index) => {
                const{name, price,image, highlightText, description, youtubeLinks, category, brandName}=props
                return (<tr key={index} className=" bg-gray-300 border-b capitalize ">
                  <td
                    scope="row"
                    className="py-4 px-4 font-medium text-gray-900 
                    whitespace-nowrap  max-w-xs overflow-hidden truncate
                    "
                  >
                    {name}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium first-letter:whitespace-nowrap  max-w-xs overflow-hidden truncate">

                    {price}

                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium">
                    {category}

                  </td>
                  <td
                    scope="row"
                    className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {brandName}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium
                max-h-[1vh]  
                 max-w-10
                 w-10 
                overflow-ellipsis 
                 whitespace-nowrap  max-w-xs overflow-hidden truncate
                  ">
                    {description}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium">
                    {highlightText.length+" Elements"}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {youtubeLinks.length+" Elements"}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium
                  whitespace-nowrap  max-w-xs overflow-hidden truncate
                  ">
                    {image.length+" Elements"}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium cursor-pointer"
                  onClick={()=>deleteProduct(props._id)}
                  >
                    delete
                  </td>

                </tr>)
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllProduct