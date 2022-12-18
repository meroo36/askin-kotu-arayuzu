import Image from "next/image";
import React from "react";
import style from "../styles/Home.module.scss";
import { getAbsoluteUrl } from "../utils/absoluteUrl";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

import { Inter } from "@next/font/google";
import { prepareInstagram } from "../utils/prepareInstagram";
import Test from "./analytics";
import Analytics from "./analytics";
import { numberWithCommas } from "../utils/numberWithCommas";

export interface IPerson {
    voteCountLike: number;
    voteCountDislike: number;
    contestantdetails: {
        fullName: string;
        country: string;
        gender: string;
        imageUrl: string;
        instagramUrl?: string;
    };
}
export interface IPeople {
    [key: string]: IPerson;
}

const inter = Inter({ subsets: ["latin"] });

async function getPeople() {
    const res = await fetch(`${getAbsoluteUrl()}/api/people`, {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
}

export default async function Home() {
    let data;
    try {
        data = await getPeople();
    } catch {
        return <div>Something went wrong</div>;
    }

    const malesWithLike = data.favoriteMale.map((e: any) => {
        e.type = "like";
        return e;
    });
    const femalesWithLike = data.favoriteFemale.map((e: any) => {
        e.type = "like";
        return e;
    });

    const malesWithDislike = data.dislikedMale.map((e: any) => {
        e.type = "dislike";
        return e;
    });
    const femalesWithDislike = data.dislikedFemale.map((e: any) => {
        e.type = "dislike";
        return e;
    });

    const allMalesObj: IPeople = [...malesWithLike, ...malesWithDislike].reduce((acc: any, cur) => {
        const { fullName } = cur.contestantdetails;
        acc[fullName] = {
            voteCountLike: cur.type == "like" ? cur.voteCount : acc[fullName]?.voteCountLike,
            voteCountDislike: cur.type == "dislike" ? cur.voteCount : acc[fullName]?.voteCountDislike,
            contestantdetails: cur.contestantdetails,
        };
        return acc;
    }, {});
    const allFemalesObj: IPeople = [...femalesWithLike, ...femalesWithDislike].reduce((acc: any, cur) => {
        const { fullName } = cur.contestantdetails;
        acc[fullName] = {
            voteCountLike: cur.type == "like" ? cur.voteCount : acc[fullName]?.voteCountLike,
            voteCountDislike: cur.type == "dislike" ? cur.voteCount : acc[fullName]?.voteCountDislike,
            contestantdetails: cur.contestantdetails,
        };
        return acc;
    }, {});

    const sortedMales = prepareInstagram(
        Object.values(allMalesObj).sort((a, b) => {
            const sumA = a.voteCountLike + a.voteCountDislike;
            const sumB = b.voteCountLike + b.voteCountDislike;
            return sumB - sumA;
        })
    );
    const sortedFemales = prepareInstagram(
        Object.values(allFemalesObj).sort((a, b) => {
            const sumA = a.voteCountLike + a.voteCountDislike;
            const sumB = b.voteCountLike + b.voteCountDislike;
            return sumB - sumA;
        })
    );

    return (
        <div className={`${style.container} ${inter.className}`}>
            <Analytics />
            <div className={style.top}>
                <a className={`${style.cardWrapper}`} href={sortedMales[0].contestantdetails.instagramUrl} target="_blank">
                    <div className={`${style.personCard} ${style.male}`}>
                        <Image
                            src={sortedMales[0].contestantdetails.imageUrl}
                            alt={""}
                            fill={true}
                            style={{ objectFit: "cover", objectPosition: "top" }}
                        />
                    </div>
                    <div>{sortedMales[0].contestantdetails.fullName}</div>
                    <div className={style.votes}>
                        <div>
                            {numberWithCommas(sortedMales[0].voteCountLike)}
                            <FaArrowCircleUp className={style.upVote} />
                        </div>
                        <div>
                            <FaArrowCircleDown className={style.downVote} />
                            {numberWithCommas(sortedMales[0].voteCountDislike)}
                        </div>
                    </div>
                </a>

                <a className={`${style.cardWrapper}`} href={sortedFemales[0].contestantdetails.instagramUrl} target="_blank">
                    <div className={`${style.personCard} ${style.female}`}>
                        <Image
                            src={sortedFemales[0].contestantdetails.imageUrl}
                            alt={""}
                            fill={true}
                            style={{ objectFit: "cover", objectPosition: "top" }}
                        />
                    </div>
                    <div>{sortedFemales[0].contestantdetails.fullName}</div>
                    <div className={style.votes}>
                        <div>
                            {numberWithCommas(sortedFemales[0].voteCountLike)}
                            <FaArrowCircleUp className={style.upVote} />
                        </div>
                        <div>
                            <FaArrowCircleDown className={style.downVote} />

                            {numberWithCommas(sortedFemales[0].voteCountDislike)}
                        </div>
                    </div>
                </a>
            </div>

            <div className={style.bottom}>
                <div className={style.left}>
                    {sortedMales.map((item, index) => {
                        if (index == 0) return null;
                        return (
                            <a key={index} className={`${style.cardWrapper}`} href={item.contestantdetails.instagramUrl} target="_blank">
                                <div className={`${style.personCard} ${style.male}`}>
                                    <Image
                                        src={item.contestantdetails.imageUrl}
                                        alt={""}
                                        fill={true}
                                        style={{ objectFit: "cover", objectPosition: "top" }}
                                    />
                                </div>

                                <div>{item.contestantdetails.fullName}</div>
                                <div className={style.votes}>
                                    <div>
                                        {numberWithCommas(item.voteCountLike)}
                                        <FaArrowCircleUp className={style.upVote} />
                                    </div>
                                    <div>
                                        <FaArrowCircleDown className={style.downVote} />
                                        {numberWithCommas(item.voteCountDislike)}
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
                <div>
                    <hr />
                </div>
                <div className={style.right}>
                    {sortedFemales.map((item, index) => {
                        if (index == 0) return null;
                        return (
                            <a key={index} className={`${style.cardWrapper}`} href={item.contestantdetails.instagramUrl} target="_blank">
                                <div className={`${style.personCard} ${style.female}`}>
                                    <Image
                                        src={item.contestantdetails.imageUrl}
                                        alt={""}
                                        fill={true}
                                        style={{ objectFit: "cover", objectPosition: "top" }}
                                    />
                                </div>
                                <div>{item.contestantdetails.fullName}</div>
                                <div className={style.votes}>
                                    <div>
                                        {numberWithCommas(item.voteCountLike)}
                                        <FaArrowCircleUp className={style.upVote} />
                                    </div>
                                    <div>
                                        <FaArrowCircleDown className={style.downVote} />
                                        {numberWithCommas(item.voteCountDislike)}
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className={style.footer}>
                Eğlence amaçlı yapılmıştır. Rahatsızlık bildirimi için <a href="mailto: mdogruca@gmail.com">mdogruca@gmail.com</a> ile iletişime
                geçebilirsiniz.
            </div>
        </div>
    );
}
