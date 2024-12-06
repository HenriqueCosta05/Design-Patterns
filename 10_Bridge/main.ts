import { Tv } from "./devices-sample/device/radio";
import { RemoteControl } from "./devices-sample/remote-control/remote-control";
import { RemoteControlWithVolume } from "./devices-sample/remote-control/remote-control-with-volume";

export function client(abstraction: RemoteControl | RemoteControlWithVolume): void {
    abstraction.togglePower() //true
    //Type guard
    if (!('changeVolumeLevel' in abstraction)) return;
    abstraction.changeVolumeLevel(20); // 30 
}

const tv = new Tv();
const tvRemoteControl = new RemoteControl(tv);
client(tvRemoteControl)