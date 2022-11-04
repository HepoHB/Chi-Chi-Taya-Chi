export class Manga{
    imageUrl!: string;
    name!: string;
    price!: number;
    id!: string;
    series!: string; // Possivelmente, pegará o ID da série no banco de dados, puxando o nome dela.
    originalSeriesName!: string; // Mesma coisa do "Series".
    pagesNumber!: number;
    writer!: string;
    rating!: number;
    ageRating!: number; 

}