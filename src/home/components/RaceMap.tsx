import React, { type FC, useState } from "react";
import {
  Circle,
  Tooltip as LeafletTooltip,
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
} from "react-leaflet";

import { Stack, useTheme } from "@mui/material";

import L, { type LatLngExpression } from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import throttle from "lodash.throttle";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, YAxis } from "recharts";

import { RACE_PATH_COORDINATES, RACE_PATH_COORDINATES_WITH_ELEVATION } from "../data/home.data";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const RaceMap: FC = () => {
  const theme = useTheme();

  const [hoveredElevationCoordinates, setHoveredElevationCoordinates] =
    useState<LatLngExpression | null>(null);

  return (
    <Stack spacing={2} width="100%" maxWidth="100%">
      <MapContainer
        style={{ height: "400px" }}
        center={[44.359744, 2.851495]}
        zoom={15}
        attributionControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline positions={RACE_PATH_COORDINATES} color={theme.palette.primary.main} weight={3} />
        {hoveredElevationCoordinates != null ? (
          <Circle
            center={hoveredElevationCoordinates}
            radius={12}
            fillOpacity={0.8}
            fillColor={theme.palette.primary.main}
            color={theme.palette.primary.main}></Circle>
        ) : null}
        <Marker position={[44.355474, 2.85291]}>
          <LeafletTooltip permanent direction="right" offset={[15, -25]}>
            Départ
          </LeafletTooltip>
        </Marker>
        <Marker position={[44.360859, 2.847086]}>
          <LeafletTooltip permanent direction="left" offset={[-15, -25]}>
            Arrivée
          </LeafletTooltip>
        </Marker>
        <Marker position={[44.363244, 2.851495]}>
          <LeafletTooltip permanent direction="left" offset={[-15, -25]}>
            DITEP de Grèzes
          </LeafletTooltip>
        </Marker>
      </MapContainer>
      <ResponsiveContainer height={200}>
        <AreaChart
          data={RACE_PATH_COORDINATES_WITH_ELEVATION.map(([lat, lng, elevation]) => ({
            elevation,
            lat,
            lng,
          }))}
          onMouseLeave={() => {
            setHoveredElevationCoordinates(null);
          }}
          onMouseMove={throttle((e) => {
            const payload = e?.activePayload?.[0]?.payload;

            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (payload?.lng && payload?.lat) {
              setHoveredElevationCoordinates([payload.lat, payload.lng]);
            }
          }, 50)}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.8} />
              <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <YAxis
            domain={[600, 800]}
            width={45}
            tickFormatter={(m: number) => `${m} m.`}
            orientation="right"
            fontFamily={"Roboto, sans-serif"}
            fontSize={10}
            ticks={[750, 700, 650]}
          />
          <CartesianGrid vertical={false}></CartesianGrid>
          <Tooltip
            wrapperStyle={{ display: "none" }}
            cursorStyle={{ backgroundColor: "red", color: "red" }}
          />
          <Area
            type="monotone"
            dataKey="elevation"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Stack>
  );
};

export default RaceMap;
