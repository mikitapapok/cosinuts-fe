import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import {
  IBasketItem,
  IGetOneParticualProductQuery,
  IGetProducts,
} from '../interfaces/interfaces';

import { from, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private productQuery: QueryRef<IGetProducts>;
  private getOneParticularProductQuery: QueryRef<IGetOneParticualProductQuery>;

  constructor(private apollo: Apollo) {
    this.getOneParticularProductQuery =
      this.apollo.watchQuery<IGetOneParticualProductQuery>({
        query: gql`
          query ($id: String) {
            getOneParticularProduct(id: $id) {
              id
              title
              description
              type
              src
              cost
              salePrice
              options {
                size
                amount
              }
            }
          }
        `,
      });
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
              options {
                size
                amount
              }
            }
          }
        }
      `,
    });
  }

  getOneParticularProduct(id: string) {
    return from(this.getOneParticularProductQuery.refetch({ id })).pipe(
      map(result => result?.data.getOneParticularProduct)
    );
  }

  updateUser(products: IBasketItem[], email: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($email: String, $products: [BasketItem]) {
          updateUser(input: { email: $email, products: $products }) {
            message
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
