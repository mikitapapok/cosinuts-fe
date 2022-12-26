import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { IAllProduct, IProducts } from '../interfaces/interfaces';
import { ProductTypesType } from '../constants/contstans';

interface IGetProducts {
  getProducts: IProducts[];
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private apollo: Apollo) {}

  fetchProducts() {
    return this.apollo.watchQuery<IAllProduct>({
      query: gql`
        {
          getAllProducts {
            id
            title
            description
            type
            src
            cost
            salePrice
          }
        }
      `,
      notifyOnNetworkStatusChange: true,
    }).valueChanges;
  }

  fetchProductsByType(typeOfProduct: string) {
    return this.apollo.watchQuery<IGetProducts>({
      query: gql`
        query ($productType: String) {
          getProducts(type: $productType) {
            id
            title
            description
            type
            src
            cost
            salePrice
          }
        }
      `,
      variables: { productType: typeOfProduct },
    }).valueChanges;
  }
}
