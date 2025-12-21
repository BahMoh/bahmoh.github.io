---
title: "Ball and Beam Experiment"
layout: default
permalink: /experiments/Experiment_ball_and_beam/
---


## Ball and Beam System



The **ball and beam** system is a classic **benchmark problem in control engineering** that is widely used to analyze and evaluate feedback control strategies.

### System Description
The system consists of:
- A **beam** that rotates about a pivot point  
- A **ball** that rolls along the beam under the influence of gravity  
- An **actuator** (such as a motor or servo) that adjusts the beam angle  
- A **sensor** that measures the position of the ball along the beam  

By changing the angle of the beam, the position of the ball can be controlled.

### Importance in Control Engineering
The ball and beam system is:
- **Open loop unstable**: without feedback control, the ball will roll off the beam  
- **Nonlinear**: due to trigonometric relationships and rolling dynamics  
- **Underactuated**: the ball position is controlled indirectly through the beam angle  

### Applications
This system is commonly used for:
- Teaching **classical and modern control methods** (PID, state space, LQR, nonlinear control)  
- Validating **control algorithms** in simulation and experiments  
- Demonstrating concepts such as **stability, feedback, and robustness**

## Simulation Setup in MATLAB and Simulink

To simulate the **ball and beam** system, the MATLAB and Simulink software environment is used. In the first step, after opening a Blank Model in the Simulink environment of MATLAB, the initial simulation settings must be configured. These include the sampling time, the solver type, and the initialization of the system model parameters.

To set the sampling time and the solver type, right click on the model workspace and select the *Model Configuration Parameters* option. In the *Solver Selection* section, set the solver type to *Fixed Step* and assign the sampling time as Ts. Figure 1 provides a suitable guide for performing these steps.


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_configuration.png"
       alt="Simulink model of the ball and beam system"
       style="width:70%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 1. Simulink model of the ball and beam system.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_SIMOpenLoop.png"
       alt="Simulink model of the ball and beam system"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 2. Simulink model of the ball and beam system.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_SimulinkLibraryBrowser.png"
       alt="Simulink model of the ball and beam system"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 3. Simulink model of the ball and beam system.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_blockDiagram.png"
       alt="Simulink model of the ball and beam system"
       style="width:60%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 4. Simulink model of the ball and beam system.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_linear_model.png"
       alt="Simulink model of the ball and beam system"
       style="width:30%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 5. Simulink model of the ball and beam system.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_blockParameterTheta.png"
       alt="Simulink model of the ball and beam system"
       style="width:30%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 6. Simulink model of the ball and beam system.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_blockParameterOutput.png"
       alt="Simulink model of the ball and beam system"
       style="width:30%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 7. Simulink model of the ball and beam system.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_Output.png"
       alt="Simulink model of the ball and beam system"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 8. Simulink model of the ball and beam system.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_blockDiagramClosedLoop.png"
       alt="Simulink model of the ball and beam system"
       style="width:60%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 9. Simulink model of the ball and beam system.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_RootLocus.png"
       alt="Simulink model of the ball and beam system"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 10. Simulink model of the ball and beam system.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_closedLoopResponseKp6.png"
       alt="Simulink model of the ball and beam system"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 11. Simulink model of the ball and beam system.
</figcaption>
</figure>



<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_PIDTuner.png"
       alt="Simulink model of the ball and beam system"
       style="width:70%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 12. Simulink model of the ball and beam system.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_PDClosedLoop.png"
       alt="Simulink model of the ball and beam system"
       style="width:70%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 13. Simulink model of the ball and beam system.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_PDOutput.png"
       alt="Simulink model of the ball and beam system"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 14. Simulink model of the ball and beam system.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_PID_BlockDiagram.png"
       alt="Simulink model of the ball and beam system"
       style="width:70%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 15. Simulink model of the ball and beam system.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_Output_PID.png"
       alt="Simulink model of the ball and beam system"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 16. Simulink model of the ball and beam system.
</figcaption>
</figure>