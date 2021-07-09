import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/viewer.module.scss';
import indexStyles from '../styles/index.module.css';
import utilStyles from '../styles/utils.module.css';
import { fullResCustomLoader, PicType } from '../components/utils';
import Link from 'next/link';
import { useEffect } from 'react';

import NavLink from './NavLink';

import panAndZoomHoc from 'react-pan-and-zoom-hoc';

export default function Viewer({
    onClick,
    pic,
    index,
}: {
    onClick: () => void;
    pic: PicType[];
    index: number;
}) {
    const [currIndex, setCurrIndex] = useState<number>(index);
    const [zoomLevel, setZoom] = useState<number>(1);

    const ZoomDiv = panAndZoomHoc('div');
    const [state, setState] = useState({ x: 0.5, y: 0.5, scale: 1 });

    function handlePanAndZoom(x: number, y: number, scale: number) {
        setState({ x, y, scale });
    }

    function handlePanMove(x: number, y: number) {
        const scale = state.scale;
        setState({ x, y, scale });
    }

    let imageStyle = {
        position: 'absolute',
        top: `${state.y * 100}%`,
        left: `${state.x * 100}%`,
    };

    return (
        <div className={styles.container}>
            <div className={styles.background} onClick={() => onClick()} />
            <div className={styles.closeButton} onClick={() => onClick()} />
            <div
                className={styles.left + ' ' + styles.button}
                onClick={() =>
                    setCurrIndex(currIndex > 0 ? currIndex - 1 : currIndex)
                }
            ></div>
            <ZoomDiv
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
            >
                <div
                    className={styles.card}
                    style={
                        pic[currIndex].ratio > 1
                            ? {
                                  width: '100vw',
                                  height:
                                      window.innerWidth / pic[currIndex].ratio,
                                  position: 'absolute',
                                  top: `${state.y * 100}%`,
                                  left: `${state.x * 100}%`,
                                  transform: `scale(${
                                      state.scale
                                  }) ,translate(${-window.innerWidth / 2}px,${
                                      -window.innerHeight / 2
                                  }px)`,
                              }
                            : {
                                  position: 'absolute',
                                  top: `${state.y * 100}%`,
                                  left: `${state.x * 100}%`,
                                  height: '100vh',
                                  width:
                                      window.innerHeight * pic[currIndex].ratio,
                                  transform: `scale(${state.scale}) translate(${
                                      -window.innerWidth / 2
                                  }px,${-window.innerHeight / 2}px)`,
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
                        src={pic[currIndex].fullPath}
                        alt={pic[currIndex].id}
                        //   width={650}
                        //   height={650 / pic[currIndex].ratio}
                        quality={100}
                        layout='fill'
                        objectFit='contain'
                        placeholder='blur'
                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAAADUlEQVQYV2P4//8/IwAI/QL/+TZZdwAAAABJRU5ErkJggg=='
                    />
                </div>
            </ZoomDiv>
            <div
                className={styles.right + ' ' + styles.button}
                onClick={() =>
                    setCurrIndex(
                        currIndex + 1 < pic.length ? currIndex + 1 : currIndex,
                    )
                }
            ></div>
        </div>
    );
}
