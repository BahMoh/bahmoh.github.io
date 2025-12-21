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
       alt="Solver settings and sampling time in the simulation."
       style="width:70%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 1. Solver settings and sampling time in the simulation.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_SIMOpenLoop.png"
       alt="Setting the initial values of the system mode."
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 2. Setting the initial values of the system model.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_SimulinkLibraryBrowser.png"
       alt="Selecting the required components to implement the system model and applying inputs to it."
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 3. Selecting the required components to implement the system model and applying inputs to it.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_blockDiagram.png"
       alt="Implementing the open-loop system in the SIMULINK environment."
       style="width:60%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 4. Implementing the open-loop system in the SIMULINK environment.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_linear_model.png"
       alt="Setting the parameters of the ball and beam system model"
       style="width:30%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 5. Setting the parameters of the ball and beam system model.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_blockParameterTheta.png"
       alt="Setting the reference input parameters."
       style="width:30%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 6. Setting the reference input parameters.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_blockParameterOutput.png"
       alt="Setting the parameters of the **To Workspace** block."
       style="width:30%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 7. Setting the parameters of the **To Workspace** block.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_Output.png"
       alt="Step response plot of the open-loop system for a step input with an amplitude of 0.2 radians"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 8. Step response plot of the open-loop system for a step input with an amplitude of 0.2 radians.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_blockDiagramClosedLoop.png"
       alt="Implementing the closed-loop system with a proportional controller in the SIMULINK environment"
       style="width:60%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 9. Implementing the closed-loop system with a proportional controller in the SIMULINK environment.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_RootLocus.png"
       alt="Root locus plot of the ball and beam system."
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 10. Root locus plot of the ball and beam system.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_closedLoopResponseKp6.png"
       alt="Step response plot of the closed-loop system for a proportional compensator with gain $K_P = 6$."
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 11. Step response plot of the closed-loop system for a proportional compensator with gain $K_P = 6$.
</figcaption>
</figure>



<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_PIDTuner.png"
       alt="Tuning the control gains using PID Tuner."
       style="width:70%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 12. Tuning the control gains using PID Tuner.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_PDClosedLoop.png"
       alt="Implementing the closed-loop system with a PD controller in the SIMULINK environment."
       style="width:70%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 13. Implementing the closed-loop system with a PD controller in the SIMULINK environment.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_PDOutput.png"
       alt="Step response plot of the closed-loop system for a PD controller with gains $K_P=7$ and $K_D=5.5$"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 14. Step response plot of the closed-loop system for a PD controller with gains $K_P=7$ and $K_D=5.5$.
</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_PID_BlockDiagram.png"
       alt="Implementing the closed-loop system with a PID controller in the SIMULINK environment."
       style="width:70%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 15. Implementing the closed-loop system with a PID controller in the SIMULINK environment.
</figcaption>
</figure>


<figure style="text-align: center;">
  <img src="{{ site.baseurl }}/images/ballAndBeam/ball_and_beam_Output_PID.png"
       alt="Step response plot of the closed-loop system for a PID controller with gains $K_P=15.1$, $K_D=8.4$ and $K_I=2.9$"
       style="width:40%;">
<figcaption style="text-align: center; background: none; padding: 0; border: none; font-size: 0.9em;">
  Figure 16. Step response plot of the closed-loop system for a PID controller with gains \(K_P = 15.1\), \(K_D = 8.4\), and \(K_I = 2.9\).
</figcaption>
</figure>