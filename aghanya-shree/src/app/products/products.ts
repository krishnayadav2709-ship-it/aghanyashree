// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// interface Product {
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;  // New field for image
// }

// @Component({
//   imports:[CommonModule],
//   selector: 'app-products',
//   templateUrl: './products.html',
//   styleUrls: ['./products.css']
// })
// export class Products {

//  products: Product[] = [
//     {
//       name: 'गोबर के कंडे',
//       price: 50,
//       description: 'पकाने और धार्मिक अनुष्ठानों के लिए पर्यावरण के अनुकूल ईंधन।',
//       imageUrl: 'assets/apro.jpg'
    
//     },
//     {
//       name: 'धूपबत्ती',
//       price: 80,
//       description: 'गोबर से बनी प्राकृतिक धूपबत्तियाँ।',
//       imageUrl: 'assets/apro.jpg'
//     },
    
//     {
//       name: 'अगरबत्ती',
//       price: 60,
//       description: 'दैनिक पूजा के लिए हस्तनिर्मित अगरबत्ती।',
//       imageUrl: 'assets/apro.jpg'
//     },
//     {
//       name: 'मच्छर अगरबत्ती',
//       price: 90,
//       description: 'रासायनिक मुक्त विशेष मच्छर अगरबत्ती ।',
//       imageUrl: 'assets/apro.jpg'
//     },
//     {
//       name: 'जैविक खाद',
//       price: 120,
//       description: 'स्वस्थ फसलों के लिए गोबर से बनी प्राकृतिक उर्वरक।',
//       imageUrl:'assets/apro.jpg'
//     },
//     {
//       name: 'गोमूत्र अर्क',
//       price: 150,
//       description: 'पारंपरिक चिकित्सा और सफाई के लिए आसवन किया गया गोमूत्र।',
//       imageUrl:'assets/apro.jpg'
//     },
//     {
//       name: 'प्राकृतिक क्लीनर',
//       price: 110,
//       description: 'गोबर आधारित रसायन मुक्त सफाई उत्पाद।',
//       imageUrl:'assets/apro.jpg'
//     },
//     {
//       name: 'पूजा सामग्री किट',
//       price: 200,
//       description: 'धार्मिक अनुष्ठानों के लिए सभी आवश्यक वस्तुओं का पूरा किट।',
//       imageUrl: 'assets/apro.jpg'
//     }
// ];

// }
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {

  products: Product[] = [
    {
      name: 'गोबर के कंडे',
      price: 50,
      description: 'पकाने और धार्मिक अनुष्ठानों के लिए पर्यावरण के अनुकूल ईंधन।',
      imageUrl: 'assets/apro.jpg'
     },
    {
      name: 'धूपबत्ती',
      price: 80,
      description: 'पकाने और धार्मिक अनुष्ठानों के लिए पर्यावरण के अनुकूल ईंधन।',
      imageUrl: 'assets/apro.jpg'
    },
    {
      name: 'अगरबत्ती',
      price: 60,
      description: 'पकाने और धार्मिक अनुष्ठानों के लिए पर्यावरण के अनुकूल ईंधन।',
      imageUrl: 'assets/apro.jpg'
    },
    {
      name: 'मच्छर अगरबत्ती',
      price: 90,
      description: 'पकाने और धार्मिक अनुष्ठानों के लिए पर्यावरण के अनुकूल ईंधन।',
      imageUrl: 'assets/apro.jpg'
    },
    {
      name: 'जैविक खाद',
      price: 120,
      description: 'पकाने और धार्मिक अनुष्ठानों के लिए पर्यावरण के अनुकूल ईंधन।',
      imageUrl: 'assets/apro.jpg'
    },
    {
      name: 'गोमूत्र अर्क',
      price: 150,
      description: 'पारंपरिक चिकित्सा और सफाई के लिए आसवन किया गया गोमूत्र।',
      imageUrl: 'assets/apro.jpg'
    },
    {
      name: 'प्राकृतिक क्लीनर',
      price: 110,
      description: 'पकाने और धार्मिक अनुष्ठानों के लिए पर्यावरण के अनुकूल ईंधन।',
      imageUrl: 'assets/apro.jpg'
    },
    {
      name: 'पूजा सामग्री किट',
      price: 200,
      description: 'धार्मिक अनुष्ठानों के लिए सभी आवश्यक वस्तुओं का पूरा किट।',
      imageUrl: 'assets/apro.jpg'
    }
  ];
    selectedProduct: any = null;

showDetails(product: any) {
  this.selectedProduct = product;

  // optional: scroll to detail section
  setTimeout(() => {
    const el = document.querySelector('.detail-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

closeDetails() {
  this.selectedProduct = null;
}
}