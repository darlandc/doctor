import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {

    activeDoctors = {
        name: 'Dr. Ray',
        license: 'D98FY94I300O3E8RF',
        email: 'doctorray@california.us',
        active: true
    };

    // FC Barcelona 2017
    private items = new Array<Item>(
        {
            id: 3,
            name: "Psychology",
            role: "open",
            doctors: {
                active: this.activeDoctors
            }
        }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
