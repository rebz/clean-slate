import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// Light SVG Icons
import {
    faArchive,
} from '@fortawesome/pro-light-svg-icons'

// Regular SVG Icons
import {
    faArchive as faArchiveRegular,

} from '@fortawesome/pro-regular-svg-icons'

// Solid SVG Icons
import {
    faArchive as faArchiveSolid,
} from '@fortawesome/pro-solid-svg-icons'

library.add(
    faArchive,
    faArchiveRegular,
    faArchiveSolid,
)

// <fa-icon :icon="['fal', 'archive']"></fa-icon> - Light
// <fa-icon :icon="['far', 'archive']"></fa-icon> - Regular
// <fa-icon :icon="['fas', 'archive']"></fa-icon> - Solid
//              use 'fab' for Brands

Vue.component('fa-icon', FontAwesomeIcon)
