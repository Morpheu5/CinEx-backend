declare namespace App.Data {
export type GalleryData = {
id: number;
name: string;
longitude: number;
latitude: number;
photos?: Array<App.Data.PhotoData>;
photosphere_id: number;
};
export type PhotoData = {
id: number;
path: string;
description: string;
gallery_id: number;
};
export type PhotosphereData = {
id: number;
name: string;
path: string;
theatre_id: number;
theatre: App.Data.TheatreData;
galleries?: Array<App.Data.GalleryData>;
};
export type TheatreData = {
id: number;
name: string;
city: string;
country: string;
latitude: number;
longitude: number;
photospheres?: Array<App.Data.PhotosphereData>;
};
}
