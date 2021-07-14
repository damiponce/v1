import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/viewer.module.scss';
import indexStyles from '../styles/index.module.css';
import utilStyles from '../styles/utils.module.css';
import designs from '../public/designs.json';
import {
    fullResCustomLoader,
    blurCustomLoader,
    PicType,
    GroupPicsType,
} from '../components/utils';
import Link from 'next/link';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import NavLink from './NavLink';

import panAndZoomHoc from 'react-pan-and-zoom-hoc';

export default function Viewer({
    onClick,
    pic,
    title,
    group,
    index,
}: {
    onClick: () => void;
    pic: PicType[] | GroupPicsType;
    title?: string;
    group?: number;
    index: number;
}) {
    const [currIndex, setCurrIndex] = useState<number>(index);
    const [zoomLevel, setZoom] = useState<number>(1);
    const ZoomDiv = panAndZoomHoc('div');
    const [state, setState] = useState({ x: 0.5, y: 0.5, scale: 1 });

    const [blur, setBlur] = useState(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAAADUlEQVQYV2P4//8/IwAI/QL/+TZZdwAAAABJRU5ErkJggg==',
    );

    function handlePanAndZoom(x: number, y: number, scale: number) {
        setState({ x, y, scale });
    }

    function handlePanMove(x: number, y: number) {
        const scale = state.scale;
        setState({ x, y, scale });
    }

    // @ts-ignore
    let picArray: any[] = pic[0] ? pic : getPicArray();

    function getPicArray() {
        let tempArray: object[] = [];
        // @ts-ignore
        Object.entries(designs[title][group]['pics']).map((id) => {
            // @ts-ignore
            tempArray.push(pic[id[1]]);
        });
        return tempArray;
    }
    useEffect(() => {
        console.log(blur);
        return;
    }, [blur]);

    let imageStyle = {
        position: 'absolute',
        top: `${state.y * 100}%`,
        left: `${state.x * 100}%`,
    };

    const [currPic, setCurrPic] = useState(picArray[currIndex].fullPath);

    function toDataURL(url: string, callback: any) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    const mobileButtons = +isMobile ? ' ' + styles.button_mobile : '';
    return (
        <div className={styles.container}>
            <div className={styles.background} onClick={() => onClick()} />
            <div className={styles.closeButton} onClick={() => onClick()}>
                <img
                    className={styles.svg}
                    src='/icons/close.svg'
                    width='36'
                    height='36'
                    alt=''
                />
            </div>
            {currIndex > 0 ? (
                <div
                    className={
                        styles.left + ' ' + styles.button + mobileButtons
                    }
                    onClick={() => (
                        setCurrPic(''),
                        setCurrIndex(currIndex > 0 ? currIndex - 1 : currIndex),
                        setCurrPic(
                            picArray[currIndex > 0 ? currIndex - 1 : currIndex]
                                .fullPath,
                        ),
                        toDataURL(
                            blurCustomLoader(
                                picArray[
                                    currIndex > 0 ? currIndex - 1 : currIndex
                                ].fullPath,
                            ),
                            function (dataUrl: string) {
                                setBlur(dataUrl);
                            },
                        )
                    )}
                >
                    <img
                        className={styles.svg}
                        src='/icons/arrow_left.svg'
                        width='36'
                        height='36'
                        alt=''
                    />
                </div>
            ) : null}
            {currIndex + 1 < picArray.length ? (
                <div
                    className={
                        styles.right + ' ' + styles.button + mobileButtons
                    }
                    onClick={() => (
                        setCurrPic(''),
                        setCurrIndex(
                            currIndex + 1 < picArray.length
                                ? currIndex + 1
                                : currIndex,
                        ),
                        setCurrPic(
                            picArray[
                                currIndex + 1 < picArray.length
                                    ? currIndex + 1
                                    : currIndex
                            ].fullPath,
                        ),
                        toDataURL(
                            blurCustomLoader(
                                picArray[
                                    currIndex + 1 < picArray.length
                                        ? currIndex + 1
                                        : currIndex
                                ].fullPath,
                            ),
                            function (dataUrl: string) {
                                setBlur(dataUrl);
                            },
                        )
                    )}
                >
                    <img
                        className={styles.svg}
                        src='/icons/arrow_right.svg'
                        width='36'
                        height='36'
                        alt=''
                    />
                </div>
            ) : null}
            {/* <ZoomDiv
                x={state.x}
                y={state.y}
                scale={state.scale}
                scaleFactor={Math.sqrt(2)}
                minScale={1}
                maxScale={2 ** 18}
                onPanAndZoom={(x, y, scale) => handlePanAndZoom(x, y, scale)}
                style={{
                    width: '100vw',
                    height: '100vh',
                    //   border: '1px solid black',
                    position: 'relative',
                }}
                onPanMove={(x, y) => handlePanMove(x, y)}
            > */}
            {picArray ? (
                <div
                    className={styles.card}
                    style={
                        picArray[currIndex].ratio > 1
                            ? {
                                  position: 'relative',
                                  width: '100vw',
                                  height:
                                      window.innerWidth /
                                      picArray[currIndex].ratio,
                                  //  position: 'absolute',
                                  //  top: `${state.y * 100}%`,
                                  //  left: `${state.x * 100}%`,
                                  //  transform: `scale(${
                                  //      state.scale
                                  //  }) ,translate(${-window.innerWidth / 2}px,${
                                  //      -window.innerHeight / 2
                                  //  }px)`,
                              }
                            : {
                                  position: 'relative',
                                  height: '100vh',
                                  width:
                                      window.innerHeight *
                                      picArray[currIndex].ratio,
                                  //  position: 'absolute',
                                  //  top: `${state.y * 100}%`,
                                  //  left: `${state.x * 100}%`,
                                  //  transform: `scale(${state.scale}) translate(${
                                  //      -window.innerWidth / 2
                                  //  }px,${-window.innerHeight / 2}px)`,
                              }
                    }
                    //   onWheel={(e) =>
                    //       e.deltaY > 0
                    //           ? setZoom(zoomLevel + e.deltaY)
                    //           : setZoom(zoomLevel + e.deltaY)
                    //   }
                >
                    <Image
                        // style={{
                        //     position: 'absolute',
                        //     top: `${state.y * 100}%`,
                        //     left: `${state.x * 100}%`,
                        // }}
                        onClick={() => {}}
                        className={' no-touch'}
                        loader={fullResCustomLoader}
                        src={currPic}
                        alt={picArray[currIndex].id}
                        //   width={650}
                        //   height={650 / pic[currIndex].ratio}
                        quality={100}
                        layout='fill'
                        objectFit='contain'
                        priority={true}
                        unoptimized={true}
                        // loading='eager'
                        placeholder='blur'
                        blurDataURL={blur}
                    />
                </div>
            ) : null}
            {/* </ZoomDiv> */}
        </div>
    );
}
