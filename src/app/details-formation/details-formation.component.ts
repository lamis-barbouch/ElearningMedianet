import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/models/formation';
import { User } from 'src/models/user';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css']
})
export class DetailsFormationComponent implements OnInit {
  paymentHandler:any = null;

  idFormation:number;
  formation:Formation;
  user:User;
  cinUser:number;
  value:null;
  constructor(private route: ActivatedRoute,private router: Router,
    private formationService:FormationService) { }

    ngOnInit(){
      this.formation=new Formation();
  
      this.idFormation=this.route.snapshot.params['idFormation'];
      this.cinUser=14;
      this.formationService.getFormationDetail(this.idFormation).subscribe(data => {
        console.log(data)
        this.formation = data;
      }, error => console.log(error));
      this.invokeStripe();
     
    }
    initializePayment(amount: number) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log({stripeToken})
          alert('Stripe token generated!');
        }
      });
    
      paymentHandler.open({
        name: 'Medianet E-learning',
        description: 'Particpation à une formation',
        amount: amount * 100
      });
    }
    
    invokeStripe() {
      if(!window.document.getElementById('stripe-script')) {
        const script = window.document.createElement("script");
        script.id = "stripe-script";
        script.type = "text/javascript";
        script.src = "https://checkout.stripe.com/checkout.js";
        script.onload = () => {
          this.paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51Kz4NyETP8wMoKkcINag0vnJfvXJ7yEmmpYIiNIlryq8I40cr7EGnk8NPbKGzhyrv2xD9jcwzMjRvKjTmqgpNo1m00OqaPtW2S',
            locale: 'auto',
            token: function (stripeToken: any) {
              console.log(stripeToken)
              alert('Payment has been successfull!');
            }
          });
        }
        window.document.body.appendChild(script);
      }
    }
  
    getFormationDetail(idFormation:number){
      this.router.navigate(['getFormationDetail',Formation])
    }

    

    participer(){
      this.formationService.participer(this.cinUser,this.idFormation,this.value).subscribe(
       data => {
          console.log(data);
       },
       error => console.log(error)
      );
      
   //   -->
    }
  gotoSuccessPage() {
    this.router.navigate(['/succesParticipeFormation']);
  }
  public logout(){
    
    this.router.navigate(['/login']);
    
 
   }
}
