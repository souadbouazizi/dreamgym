import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { faCrown} from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';




let PlansItems = [
{
    id: 1,
    itemClasses: 'bg-light rounded-0 p-4',
    itemIcon: faHeart,
    iconColor: '#be1620',
    itemTitle: 'Basic',
    itemPrice: 30,
    firstListItem: 'First list item',
    secondListItem: 'second list item',
    thirdListItem: 'Third list item',
    btnClasses: 'btn btn-dark rounded-0 text-capitalise w-100'
},
{
    id: 2,
    itemClasses: 'bg-warning text-light rounded-0 p-4',
    itemIcon: faCrown,
    iconColor: '#ffffff',
    itemTitle: 'premium',
    itemPrice: 50,
    firstListItem: 'First list item',
    secondListItem: 'second list item',
    thirdListItem: 'Third list item',
    btnClasses: 'btn btn-light rounded-0 text-capitalise w-100'
},
{
    id: 3,
    itemClasses: 'bg-purple rounded-0 p-4',
    itemIcon: faMedal,
    iconColor: ' ',
    itemTitle: 'pro',
    itemPrice: 45,
    firstListItem: 'First list item',
    secondListItem: 'second list item',
    thirdListItem: 'Third list item',
    btnClasses: 'btn btn-dark rounded-0 text-capitalise w-100'
}




];
export default PlansItems;