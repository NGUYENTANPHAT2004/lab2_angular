import { Component , Input } from '@angular/core';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  @Input() addproduct:any
  name:string=''
  price:number = 0
  image:string = ''
  onAddProduct=()=>{
    this.addproduct({
      name:this.name,
      price:this.price,
      image:this.image,
    })
  }
}
