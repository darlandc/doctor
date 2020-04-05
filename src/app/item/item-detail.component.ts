import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {

    item: Item;
    activeDoctors = {}

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
        this.activeDoctors = this.itemService.activeDoctors;
        console.log(id)
        console.log(this.activeDoctors + ' ---> from item detail!')

    }
}
