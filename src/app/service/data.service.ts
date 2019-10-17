import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) {
    //
  }

  // Get data from Batik Motif List in the website
  getDescription() {
    return this.httpClient.get('https://iwarebatik.elearninglab.org/wp-json/wp/v2/batikdescription?per_page=67');
  }

  //Get data from website for regions

  getBaliDescription() {
    return this.httpClient.get('https://iwarebatik.elearninglab.org/wp-json/wp/v2/regiondescription/?slug=bali/');
  }

  getAcehDescription() {
    return this.httpClient.get('https://iwarebatik.elearninglab.org/wp-json/wp/v2/regiondescription/?slug=aceh/');
  }

  getNorthSumatraDescription() {
    return this.httpClient.get('https://iwarebatik.elearninglab.org/wp-json/wp/v2/regiondescription/?slug=north-sumatra/');
  }

  getWestSumatraDescription() {
    return this.httpClient.get('https://iwarebatik.elearninglab.org/wp-json/wp/v2/regiondescription/?slug=west-sumatra/');
  }

  getJambiDescription() {
    return this.httpClient.get('https://iwarebatik.elearninglab.org/wp-json/wp/v2/regiondescription/?slug=jambi/');
  }

  getSouthSumatraDescription() {
    return this.httpClient.get('https://iwarebatik.elearninglab.org/wp-json/wp/v2/regiondescription/?slug=south-sumatra/');
  }

}
