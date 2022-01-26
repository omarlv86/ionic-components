import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps:{
        nombre: 'Omar',
        pais: 'Mexico'
      }
      //cssClass: 'my-custom-class'
    });
    await modal.present();

    //const resp = await modal.onDidDismiss();
    //const { data } = await modal.onDidDismiss();
    const { data } = await modal.onWillDismiss();
    console.log('onDidDismiss')

    //console.log(resp)
    console.log(data)
  }

}
