import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {

    changeVolumeLevel(newVolume: number): void {
        const currentVolume = this.device.getVolume();
        this.device.setVolume(currentVolume + newVolume);
    }
}