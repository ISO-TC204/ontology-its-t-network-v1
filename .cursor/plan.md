| Concept                    | File                  | Notes                                                      |
|----------------------------|-----------------------|------------------------------------------------------------|
| AreaFeature                | Area                  |                                                            |
| AreaGeometry               | Area                  |                                                            |
| AreaByCircle               | Area                  |                                                            |
| AreaByCode                 | Area                  |                                                            |
| AreaByGrid                 | Area                  |                                                            |
| AreaByLinearBoundaries     | Area                  |                                                            |
| AreaByMultiPolygon         | Area                  |                                                            |
| AreaByPolygon              | Area                  |                                                            |
| AreaByRectangle            | Area                  |                                                            |
| LocationCode               | Core                  |                                                            |
| Feature                    | Core                  | merged former :Location; subclass of geo:Feature            |
| SpatialLocation            | Core                  | spatial phenomenon as a Feature                             |
| CodedGeometry              | Core                  | Geometry resolved via :hasLookupCode → :LocationCode        |
| LocationThing              | Core                  | parent for all Location concepts                           |
| LocationGroup              | Core                  |                                                            |
| SpatialObject              | Core                  | Subclass of geo:SpatialObject                              |
| Geometry                   | Core                  | (was LocationRepresentation alignment)                    |
| rdf:langString             | its-sh                | use its-sh shapes for multilingual values                  |
| TransportNetworkLocation   | its-trans-network     |                                                            |
| Itinerary                  | Itinerary             | subclass of geo:Feature                                    |
| ItineraryByWaypoints       | Itinerary             |                                                            |
| ItineraryCode              | Itinerary             |                                                            |
| destination                | its-journey           |                                                            |
| carriageway??              | its-transport-network |                                                            |
| Road                       | its-transport-network |                                                            |
| Junction                   | its-transport-network |                                                            |
| hasDescription             | its-transport-network |                                                            |
| cdm3:Lane???               | cdm3                  |                                                            |
| LinearElement              | its-transport-network |                                                            |
| LinearFeature              | Linear                |                                                            |
| LinearGeometry             | Linear                |                                                            |
| LinearByPoints             | Linear                |                                                            |
| LinearByCode               | Linear                |                                                            |
| LinearByLineString         | Linear                |                                                            |
| LinearByLinearRing         | Linear                |                                                            |
| LinearByMultiLineString    | Linear                |                                                            |
| OffsetDistance             | Linear                | allow i72:Length and i72:Percent from designated reference |
| PointByLinearPosition      | Linear                |                                                            |
| ElevationConfidence        | Point                 |                                                            |
| PointFeature               | Point                 |                                                            |
| PointByCoordinates         | Point                 |                                                            |
| PointByCode                | Point                 |                                                            |
| PointGeometry              | Point                 | subClass of sf:Point                                       |
| PositionAccuracy           | Point                 |                                                            |
| PositionConfidenceEllipse  | Point                 |                                                            |
| various properties         | properties            |                                                            |
