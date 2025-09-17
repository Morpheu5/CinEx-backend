import UserController from './UserController'
import TheatreController from './TheatreController'
import PhotosphereController from './PhotosphereController'
import GalleryController from './GalleryController'
import PhotoController from './PhotoController'
import Settings from './Settings'
import Auth from './Auth'

const Controllers = {
    UserController: Object.assign(UserController, UserController),
    TheatreController: Object.assign(TheatreController, TheatreController),
    PhotosphereController: Object.assign(PhotosphereController, PhotosphereController),
    GalleryController: Object.assign(GalleryController, GalleryController),
    PhotoController: Object.assign(PhotoController, PhotoController),
    Settings: Object.assign(Settings, Settings),
    Auth: Object.assign(Auth, Auth),
}

export default Controllers