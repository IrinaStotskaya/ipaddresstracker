export function addOffset(map) {
    const offset = map.getSize().y*0.1;
    map.panBy([0, offset], {animate: false});
}