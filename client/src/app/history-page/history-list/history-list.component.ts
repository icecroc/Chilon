import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core'
import {Order} from '../../shared/interfaces'
import {MaterialInstance, MaterialService} from '../../shared/classes/material.service'

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnDestroy, AfterViewInit {
  @Input() orders: Order[]
  @ViewChild('modal') modalRef: ElementRef

  selectedOrder: Order
  modal: MaterialInstance

  ngOnDestroy() {
    this.modal.destroy()
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }

  selectOrder(order: Order) {
    this.selectedOrder = order
    console.log(order)
    this.modal.open()
  }

  closeModal() {
    this.modal.close()
  }

}
