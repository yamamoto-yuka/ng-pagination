import { Component, OnInit } from '@angular/core';
import { Product } from '../interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // now_page: number = 1;
  // all_data: number = 7;
  // page_size: number = 5;

  // max_page = this.all_data / this.page_size;
  //  7 / 5 = max 2 page

  // start_page = 0;
  // end_page = 0;

  // next = Math.min(this.now_page + 1, this.max_page);
  // prev = Math.max(this.now_page -1, 1);

  products:Product[] = [];

  currentPage =1;
  totalPage = 0;
  showLoadbtn = true;
  loading = false;

 


  constructor(private cs: CommonService) { }

  loadMore(){
    this.currentPage = this.currentPage + 1;
    this.cs.getData(this.currentPage).subscribe(res =>{
      for(let i=0; i<res.data.length; i++){
        this.products.push(res.data[i]);
      }
      this.loading = false;
    })
    if(this.currentPage === this.totalPage){
      this.showLoadbtn = false;
    }
}

  // next(now_page:number){
  //   Math.min(now_page + 1, this.max_page);
  // }

  // prev(now_page:number){
  //   Math.max(now_page - 1, 1);
  // }


  ngOnInit(): void {
    this.cs.getData(1).subscribe((res) => {
      console.log(res);
      this.products = res.data;
      this.totalPage = res.meta.pagination.pageCount;
    });
  }

}
