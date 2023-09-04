import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var window: any;
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any[] = [];
  categories:string[] = [];
  cartProducts: any=[];
  loading: boolean =false;
  base64: any ='';
  form! : FormGroup;
  addButton: boolean = false;
  fileName=''
  constructor(private service:ProductsService, private build: FormBuilder) {}
  ngOnInit(): void {
    this.form =this.build.group({
      title:['',[Validators.required]],      
      price:['',[Validators.required]],
      description:['',[Validators.required]],
      image:[this.fileName,[Validators.required]],
      category:['',[Validators.required]],

    })
    this.getProducts()
    this.getCategories()  }
  
    clearForm(){
      this.form.reset()
    }
    getProducts() {
  this.service.getAllProducts().subscribe((res:any) => {
  this.products = res
    console.log(res)
  })
  
    }

    getCategories() {
      this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res 
      console.log(res)   
      })
      
        }
  getSelectedCategory(event: any ){
  this.form.get('category')?.setValue(event.target.value)
  }
  getImagePath(event: any ){
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL (file);
  reader.onload = () => {
  this.base64 = reader.result;
  this.form.get('image')?.setValue(this.base64)
  };
  }

addProduct(){
  const model= this.form.value
  this.service.createProduct(model).subscribe (res =>{
    alert("Add Product success")
  })
  console.log(this.form)

}
update(item:any){
  this.form.patchValue({
    title:  item.title,     
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
  })
  this.base64 = item.image
}
updateProduct(){
  const model= this.form.value
  this.service.createProduct(model).subscribe (res =>{
    alert("Add Product success")
  })
}
}