import { Injectable } from '@angular/core';

import { Observable } from "rxjs/observable";
import {Data} from "@angular/router";


// export interface Product{
//     id: string;
//     name: string;
//     description: string;
//     imgfile: string;
// }
//
// export interface Cate{
//     name: string;
//     id: string;
//     children: Product[];
//     imgfile: string;
//     description: string;
//
// }


@Injectable()
export class DataService {

    // public static fbList: AngularFireList<Cate>;
    // public cateList: Cate[] = [];
    // private dbRef: any;

    constructor() {

        // this.dbRef = this.connect('lum').subscribe(snap =>{
        //     snap.forEach(cate =>{
        //
        //         this.cateList.push( new Cate(
        //             cate['name'],
        //             cate['id'],
        //             cate['children'],
        //             cate['imgfiles'],
        //             cate['hasChild'],
        //             cate['level'],
        //             cate['parent_id'],
        //             cate['description'],
        //         ));
        //     });
        // });

    }

    private connect(path){
        // return this.af.list(path).valueChanges()
        //     .map(snapshorts => {
        //
        //         snapshorts.forEach(cate =>{
        //             let products = cate['children'].map(p=>{
        //                 return new Product(
        //                     p['brand'],
        //                     p['id'],
        //                     p['active'],
        //                     p['isFav'],
        //                     p['name'],
        //                     p['mainImgIndex'],
        //                     p['description'],
        //                     p['imgfiles'],
        //                     p['rating']);
        //             });
        //
        //             cate['children'] = products;
        //             return cate;
        //         });
        //
        //         return snapshorts;
        //     });
    }

    public getCateById(cateId: string){
        //
        // let cate: Cate;
        // this.cateList.forEach(c=>{
        //     if(cateId === c.id){
        //         cate = c;
        //     }
        // });
        // return cate;
    }

    public getProductById(prodId: string){
        // let prod: Product;
        // this.cateList.forEach(c=>{
        //     c.children.forEach(p=>{
        //         if(p.id === prodId){
        //             prod = p;
        //         }
        //     });
        // })
        // return prod;
    }

    public unsubscribe(){
        // this.dbRef.unsubscribe();
    }


}

/*

import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    template: `
  <ul>
    <li *ngFor="let item of items | async">
      {{ item.name }}
    </li>
  </ul>
  `
})
export class MyApp {
    items: Observable<any[]>;
    constructor(db: AngularFirestore) {
        this.items = db.collection('items').valueChanges();
    }
}
*/