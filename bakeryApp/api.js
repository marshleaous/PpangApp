import client from "./sanity";
let sanityQuery = (query, params) => client.fetch(query, params);

export const getFeatureRestaurant = ()=>{
    return sanityQuery(`
    *[_type=='featured']{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type->{
          name
          }
        }
      }
    `)
}

export const getCategories = ()=>{
    return sanityQuery(`
       *[_type == 'category']
    `)
}

export const getFeatureRestaurantById = id=>{
    return sanityQuery(`
    *[_type=='featured' && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
          name
          }
        }
      }[0]
    `)
}

export const getOrder = () => {
  return sanityQuery(`
    *[_type == 'order'] | order(_createdAt desc) {
      _id,
      name,
      orderId,
      phoneNumber,
      dishes[]{
        dish->{
          name,
          price,
          image
        },
        quantity
      }
    }
  `);
}

export const getAllOrder = () => {
  return sanityQuery(`
    *[_type == 'order'] | order(_createdAt desc) {
      _id,
      name,
      orderId,
      phoneNumber,
      dishes[]{
        dish->{
          name,
          price,
          image
        },
        quantity
      }
    }
  `);
}