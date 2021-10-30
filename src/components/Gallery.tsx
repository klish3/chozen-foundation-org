import { initializeApp } from '@firebase/app';
import firebaseConfig from '../firebase.config'
import { getStorage, ref, getDownloadURL, listAll } from "@firebase/storage";

interface imageInt {
    src: string;
    thumbnail: string;
}
const images: imageInt[] = [];
// eslint-disable-next-line
initializeApp(firebaseConfig);

const storage = getStorage();
// Create a reference under which you want to list
const listRef = ref(storage, 'gs://chozen-foundation.appspot.com/big_pack_2021_10/');

// Find all the prefixes and items.
listAll(listRef)
    .then((res) => {
        // console.warn(res);
        res.items.forEach((itemRef) => {
            // All the items under listRef.

            getDownloadURL(ref(storage, itemRef.fullPath))
                .then((url) => {
                    // `url` is the download URL for 'images/stars.jpg'

                    // This can be downloaded directly:
                    images.push({ src: url, thumbnail: '' })
                  
                })
                .catch((error) => {
                    // Handle any errors
                });

        });
    }).catch((error) => {
        // Uh-oh, an error occurred!
    });


const Gallery = () => {


    return (
        <div>
            
            {images.map(e => (
                <div className="main">
                    <img src={e.src} alt="" />
                </div>

            ))}
        </div>
    );
}

export default Gallery;