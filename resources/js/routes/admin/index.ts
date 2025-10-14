import theatre from './theatre'
import photosphere from './photosphere'
import gallery from './gallery'
import navigationAnchor from './navigation-anchor'

const admin = {
    theatre: Object.assign(theatre, theatre),
    photosphere: Object.assign(photosphere, photosphere),
    gallery: Object.assign(gallery, gallery),
    navigationAnchor: Object.assign(navigationAnchor, navigationAnchor),
}

export default admin