import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      Sku: 'JVC200123',
      Name: 'Acme Disc',
      Price: 1.25,
      Type: { Metric: 'Size', Value: [700], Unit: 'MB' },
    },
    {
      Sku: 'JVC200124',
      Name: 'Acme Disc 2',
      Price: 1.04,
      Type: { Metric: 'Size', Value: [700], Unit: 'MB' },
    },
    {
      Sku: 'JVC200125',
      Name: 'Acme Disc 3',
      Price: 1.99,
      Type: { Metric: 'Size', Value: [700], Unit: 'MB' },
    },
    {
      Sku: 'JVC200126',
      Name: 'Acme Disc 4',
      Price: 1.1,
      Type: { Metric: 'Size', Value: [700], Unit: 'MB' },
    },
    {
      Sku: 'GGWP0007',
      Name: 'War and Peace',
      Price: 20,
      Type: { Metric: 'Weight', Value: [2], Unit: 'KG' },
    },
  ],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        product => product.Sku === newProduct.sku
      );
      if (!existingProduct) {
        state.products.push({
          Sku: newProduct.Sku,
          Name: newProduct.Name,
          Price: newProduct.Price,
          Type: newProduct.Type,
        });
      }
      if (existingProduct) {
        console.log('Product already exist.');
      }
      console.log(newProduct);
    },
    removeProduct: (state, action) => {
      const prevProduct = action.payload;
      prevProduct.forEach(element => {
        state.products = state.products.filter(
          product => product.Sku !== element
        );
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
