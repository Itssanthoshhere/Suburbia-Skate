"use client";

import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import {
    CameraControls,
    Environment,
    Preload,
    useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { asImageSrc } from "@prismicio/client";

import { useCustomizerControls } from "./Context";
import { Skateboard } from "@/components/Skateboard";

const DEFAULT_WHEEL_TEXTURE = "/skateboard/SkateWheel1.png";
const DEFAULT_DECK_TEXTURE = "/skateboard/Deck.webp";
const DEFAULT_TRUCK_COLOR = "#6F6E6A";
const DEFAULT_BOLT_COLOR = "#6F6E6A";
const ENVIRONMENT_COLOR = "#3B3A3A";

type Props = {
    wheelTextureURLs: string[];
    deckTextureURLs: string[];
};

export default function Preview({ wheelTextureURLs, deckTextureURLs }: Props) {

    const { selectedWheel, selectedBolt, selectedDeck, selectedTruck } =
        useCustomizerControls();

    const wheelTexureURL =
        asImageSrc(selectedWheel?.texture) ?? DEFAULT_WHEEL_TEXTURE;
    const deckTexureURL =
        asImageSrc(selectedDeck?.texture) ?? DEFAULT_DECK_TEXTURE;
    const truckColor = selectedTruck?.color ?? DEFAULT_TRUCK_COLOR;
    const boltColor = selectedBolt?.color ?? DEFAULT_BOLT_COLOR;


    return
    <Canvas>
        <Suspense fallback={null}>
            <Skateboard
                wheelTextureURLs={wheelTextureURLs}
                wheelTextureURL={wheelTexureURL}
                deckTextureURLs={deckTextureURLs}
                deckTextureURL={deckTexureURL}
                truckColor={truckColor}
                boltColor={boltColor}
                pose="side"
            />

            <Preload all />
        </Suspense>
    </Canvas>
}

