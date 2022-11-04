import { Component, OnInit } from "@angular/core";
import { Manga } from "./manga";

@Component({
    selector: 'app-manga-list',
    templateUrl: './manga-list.component.html'

})

export class MangaList implements OnInit{
    mangas: Manga[] = [];

    ngOnInit(): void {
        this.mangas = [{
            imageUrl:'/assets/images/ChainsawMan_01.jpg',
            name: 'Chainsaw Man Volume 1',
            price: 19.99,
            id: 'CHSMAN001',
            series: 'Chainsaw Man',
            originalSeriesName: 'Chainsaw Man',
            pagesNumber: 200,
            writer: 'Tatsuki Fujimoto',
            rating: 4.5,
            ageRating: 18

        },
        {
            imageUrl:'/assets/images/ChainsawMan_02.jpg',
            name: 'Chainsaw Man Volume 2',
            price: 19.99,
            id: 'CHSMAN002',
            series: 'Chainsaw Man',
            originalSeriesName: 'Chainsaw Man',
            pagesNumber: 200,
            writer: 'Tatsuki Fujimoto',
            rating: 4.0,
            ageRating: 18

        },
        {
            imageUrl:'/assets/images/ChainsawMan_04.jpg',
            name: 'Chainsaw Man Volume 4',
            price: 19.99,
            id: 'CHSMAN004',
            series: 'Chainsaw Man',
            originalSeriesName: 'Chainsaw Man',
            pagesNumber: 200,
            writer: 'Tatsuki Fujimoto',
            rating: 4.5,
            ageRating: 18

        },
        {
            imageUrl:'/assets/images/ChainsawMan_10.jpg',
            name: 'Chainsaw Man Volume 10',
            price: 19.99,
            id: 'CHSMAN010',
            series: 'Chainsaw Man',
            originalSeriesName: 'Chainsaw Man',
            pagesNumber: 200,
            writer: 'Tatsuki Fujimoto',
            rating: 2,
            ageRating: 18

        }]
        
    }

}