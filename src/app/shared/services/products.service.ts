import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { IAllProduct } from '../interfaces/interfaces';

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
}
