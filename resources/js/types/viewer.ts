export type Id = number;

export interface PhotoViewerDto {
    id: Id;
    path: string;
    image_url?: string; // if you added it to PhotoData
    description: string;
    gallery_id: Id;
}

export interface GalleryViewerDto {
    id: Id;
    name: string;
    latitude: number | null;
    longitude: number | null;
    photos?: PhotoViewerDto[] | { data: PhotoViewerDto[] }; // normalize at runtime
}

export interface NavigationAnchorViewerDto {
    id: Id;
    latitude: number | null;
    longitude: number | null;
    target_id: Id;
    // Depending on your DTO this may be `target` or not.
    target?: { id: Id; name: string; path: string };
}

export interface PhotosphereViewerDto {
    id: Id;
    name: string;
    path: string;
    galleries?: GalleryViewerDto[] | { data: GalleryViewerDto[] };
    navigation_anchors?: NavigationAnchorViewerDto[] | { data: NavigationAnchorViewerDto[] };
}
