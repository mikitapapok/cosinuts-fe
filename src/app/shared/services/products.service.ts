import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { IGetProducts } from '../interfaces/interfaces';

import { from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private productQuery: QueryRef<IGetProducts>;

  constructor(private apollo: Apollo) {
    this.productQuery = this.apollo.watchQuery<IGetProducts>({
      query: gql`
        query ($productType: String, $offset: Int) {
          getProducts(type: $productType, offset: $offset) {
            count
            products {
              id
              title
              description
              type
              src
              cost
              salePrice
            }
          }
        }
      `,
    });
  }

  updateUser(products: string[], email: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($email: String, $products: [String]) {
          updateUser(input: { email: $email, products: $products }) {
            products
          }
        }
      `,
      variables: { email: email, products: products },
    });
  }

  getProductsWithRefetch(typeOfProduct: string, offset: number) {
    return from(
      this.productQuery?.refetch({ productType: typeOfProduct, offset: offset })
    ).pipe(
      map(result => {
        return {
          count: result?.data.getProducts.count,
          products: result?.data.getProducts.products,
        };
      })
    );
  }
}
