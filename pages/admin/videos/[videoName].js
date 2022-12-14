/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import styles from '../../../styles/admin/videos.module.css';
import Link from 'next/link';

export default function VideoPreviewPage() {
    const router = useRouter()
    const videoname = router.query.videoName;
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

    return (
        <Fragment>
            <section className={styles.section}>
                {
                    urlArray.map(url => <div className={styles.objectWrapper} key={url}>
                        <Link href={url}><p className={styles.btn}>in s3 öffnen</p></Link>
                        <video controls="controls" className={styles.video}>
                            <source src={url} />
                        </video>
                        <img className={styles.image} src={url}></img>
                    </div>
                    )
                }
            </section>


        </Fragment>
    )
}