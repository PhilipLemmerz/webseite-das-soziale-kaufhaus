/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import styles from '../../../styles/admin/videos.module.css';
import Link from 'next/link';

export default function VideoPreviewPage() {
    const router = useRouter()
    const videoname = router.query.photoName;
    const [urlArray, setUrlArray] = useState([]);

    useEffect(() => {
        if (videoname) {
            getVideoUrl();
        }
    }, [videoname]);

    async function getVideoUrl() {
        const nameArray = videoname.split('+++');
        const urls = [];
        for await (let filename of nameArray) {
            const response = await fetch('http://localhost:3030/dsk-website/getSignedURL', {
                method: "POST",
                body: JSON.stringify({ method: "getObject", filename: filename }),
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            urls.push(data.url);
        }
        setUrlArray([...urls])
        console.log(urlArray)
    }

    function print() {
        window.print();
    }

    return (
        <Fragment>
            <section className={styles.section}>
                <button className={styles.printBTN} onClick={print}>drucken</button>
                {
                    urlArray.map(url => <div className={styles.objectWrapperPhoto} key={url}>
                        <Link href={url}><p className={styles.btn}>in s3 öffnen</p></Link>
                        <img className={styles.image} src={url}></img>
                    </div>
                    )
                }
            </section>


        </Fragment>
    )
}