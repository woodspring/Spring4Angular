/**
 * New typescript file
 */
import { Features } from './entity/features';
export class Customer {
  /*featuresList: Features[];*/
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public featuresList: Features[]) {

  }
}
