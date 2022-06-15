/* eslint-disable */
/* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY. */
import * as Types from '../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RocketsQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type RocketsQuery = { __typename?: 'Query', rockets: Array<{ __typename?: 'Rocket', id: string | null, name: string | null, wikipedia: string | null, company: string | null, country: string | null, height: { __typename?: 'Distance', meters: number | null } | null, mass: { __typename?: 'Mass', kg: number | null } | null } | null> | null };

export type RocketQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type RocketQuery = { __typename?: 'Query', rocket: { __typename?: 'Rocket', id: string | null, name: string | null, company: string | null, mass: { __typename?: 'Mass', kg: number | null } | null, height: { __typename?: 'Distance', meters: number | null } | null } | null };


export const RocketsDocument = gql`
    query rockets($limit: Int) {
  rockets(limit: $limit) {
    id
    name
    height {
      meters
    }
    mass {
      kg
    }
    wikipedia
    company
    country
  }
}
    `;

/**
 * __useRocketsQuery__
 *
 * To run a query within a React component, call `useRocketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRocketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRocketsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useRocketsQuery(baseOptions?: Apollo.QueryHookOptions<RocketsQuery, RocketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RocketsQuery, RocketsQueryVariables>(RocketsDocument, options);
      }
export function useRocketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RocketsQuery, RocketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RocketsQuery, RocketsQueryVariables>(RocketsDocument, options);
        }
export type RocketsQueryHookResult = ReturnType<typeof useRocketsQuery>;
export type RocketsLazyQueryHookResult = ReturnType<typeof useRocketsLazyQuery>;
export type RocketsQueryResult = Apollo.QueryResult<RocketsQuery, RocketsQueryVariables>;
export const RocketDocument = gql`
    query rocket($id: ID!) {
  rocket(id: $id) {
    id
    name
    company
    mass {
      kg
    }
    height {
      meters
    }
  }
}
    `;

/**
 * __useRocketQuery__
 *
 * To run a query within a React component, call `useRocketQuery` and pass it any options that fit your needs.
 * When your component renders, `useRocketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRocketQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRocketQuery(baseOptions: Apollo.QueryHookOptions<RocketQuery, RocketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RocketQuery, RocketQueryVariables>(RocketDocument, options);
      }
export function useRocketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RocketQuery, RocketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RocketQuery, RocketQueryVariables>(RocketDocument, options);
        }
export type RocketQueryHookResult = ReturnType<typeof useRocketQuery>;
export type RocketLazyQueryHookResult = ReturnType<typeof useRocketLazyQuery>;
export type RocketQueryResult = Apollo.QueryResult<RocketQuery, RocketQueryVariables>;