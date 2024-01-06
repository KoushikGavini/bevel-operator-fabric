/*
 * Copyright Kungfusoftware.es. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
// Code generated by applyconfiguration-gen. DO NOT EDIT.

package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
)

// FabricChaincodeTemplateSpecApplyConfiguration represents an declarative configuration of the FabricChaincodeTemplateSpec type for use
// with apply.
type FabricChaincodeTemplateSpecApplyConfiguration struct {
	Annotations         map[string]string         `json:"annotations,omitempty"`
	Labels              map[string]string         `json:"labels,omitempty"`
	PodAnnotations      map[string]string         `json:"podAnnotations,omitempty"`
	PodLabels           map[string]string         `json:"podLabels,omitempty"`
	ImagePullPolicy     *v1.PullPolicy            `json:"imagePullPolicy,omitempty"`
	ImagePullSecrets    []v1.LocalObjectReference `json:"imagePullSecrets,omitempty"`
	Command             []string                  `json:"command,omitempty"`
	Args                []string                  `json:"args,omitempty"`
	Affinity            *v1.Affinity              `json:"affinity,omitempty"`
	Tolerations         []v1.Toleration           `json:"tolerations,omitempty"`
	Resources           *v1.ResourceRequirements  `json:"resources,omitempty"`
	Credentials         *TLSApplyConfiguration    `json:"credentials,omitempty"`
	Replicas            *int                      `json:"replicas,omitempty"`
	Env                 []v1.EnvVar               `json:"env,omitempty"`
	ChaincodeServerPort *int                      `json:"chaincodeServerPort,omitempty"`
	MspID               *string                   `json:"mspID,omitempty"`
}

// FabricChaincodeTemplateSpecApplyConfiguration constructs an declarative configuration of the FabricChaincodeTemplateSpec type for use with
// apply.
func FabricChaincodeTemplateSpec() *FabricChaincodeTemplateSpecApplyConfiguration {
	return &FabricChaincodeTemplateSpecApplyConfiguration{}
}

// WithAnnotations puts the entries into the Annotations field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, the entries provided by each call will be put on the Annotations field,
// overwriting an existing map entries in Annotations field with the same key.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithAnnotations(entries map[string]string) *FabricChaincodeTemplateSpecApplyConfiguration {
	if b.Annotations == nil && len(entries) > 0 {
		b.Annotations = make(map[string]string, len(entries))
	}
	for k, v := range entries {
		b.Annotations[k] = v
	}
	return b
}

// WithLabels puts the entries into the Labels field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, the entries provided by each call will be put on the Labels field,
// overwriting an existing map entries in Labels field with the same key.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithLabels(entries map[string]string) *FabricChaincodeTemplateSpecApplyConfiguration {
	if b.Labels == nil && len(entries) > 0 {
		b.Labels = make(map[string]string, len(entries))
	}
	for k, v := range entries {
		b.Labels[k] = v
	}
	return b
}

// WithPodAnnotations puts the entries into the PodAnnotations field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, the entries provided by each call will be put on the PodAnnotations field,
// overwriting an existing map entries in PodAnnotations field with the same key.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithPodAnnotations(entries map[string]string) *FabricChaincodeTemplateSpecApplyConfiguration {
	if b.PodAnnotations == nil && len(entries) > 0 {
		b.PodAnnotations = make(map[string]string, len(entries))
	}
	for k, v := range entries {
		b.PodAnnotations[k] = v
	}
	return b
}

// WithPodLabels puts the entries into the PodLabels field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, the entries provided by each call will be put on the PodLabels field,
// overwriting an existing map entries in PodLabels field with the same key.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithPodLabels(entries map[string]string) *FabricChaincodeTemplateSpecApplyConfiguration {
	if b.PodLabels == nil && len(entries) > 0 {
		b.PodLabels = make(map[string]string, len(entries))
	}
	for k, v := range entries {
		b.PodLabels[k] = v
	}
	return b
}

// WithImagePullPolicy sets the ImagePullPolicy field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the ImagePullPolicy field is set to the value of the last call.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithImagePullPolicy(value v1.PullPolicy) *FabricChaincodeTemplateSpecApplyConfiguration {
	b.ImagePullPolicy = &value
	return b
}

// WithImagePullSecrets adds the given value to the ImagePullSecrets field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the ImagePullSecrets field.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithImagePullSecrets(values ...v1.LocalObjectReference) *FabricChaincodeTemplateSpecApplyConfiguration {
	for i := range values {
		b.ImagePullSecrets = append(b.ImagePullSecrets, values[i])
	}
	return b
}

// WithCommand adds the given value to the Command field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the Command field.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithCommand(values ...string) *FabricChaincodeTemplateSpecApplyConfiguration {
	for i := range values {
		b.Command = append(b.Command, values[i])
	}
	return b
}

// WithArgs adds the given value to the Args field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the Args field.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithArgs(values ...string) *FabricChaincodeTemplateSpecApplyConfiguration {
	for i := range values {
		b.Args = append(b.Args, values[i])
	}
	return b
}

// WithAffinity sets the Affinity field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Affinity field is set to the value of the last call.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithAffinity(value v1.Affinity) *FabricChaincodeTemplateSpecApplyConfiguration {
	b.Affinity = &value
	return b
}

// WithTolerations adds the given value to the Tolerations field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the Tolerations field.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithTolerations(values ...v1.Toleration) *FabricChaincodeTemplateSpecApplyConfiguration {
	for i := range values {
		b.Tolerations = append(b.Tolerations, values[i])
	}
	return b
}

// WithResources sets the Resources field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Resources field is set to the value of the last call.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithResources(value v1.ResourceRequirements) *FabricChaincodeTemplateSpecApplyConfiguration {
	b.Resources = &value
	return b
}

// WithCredentials sets the Credentials field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Credentials field is set to the value of the last call.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithCredentials(value *TLSApplyConfiguration) *FabricChaincodeTemplateSpecApplyConfiguration {
	b.Credentials = value
	return b
}

// WithReplicas sets the Replicas field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Replicas field is set to the value of the last call.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithReplicas(value int) *FabricChaincodeTemplateSpecApplyConfiguration {
	b.Replicas = &value
	return b
}

// WithEnv adds the given value to the Env field in the declarative configuration
// and returns the receiver, so that objects can be build by chaining "With" function invocations.
// If called multiple times, values provided by each call will be appended to the Env field.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithEnv(values ...v1.EnvVar) *FabricChaincodeTemplateSpecApplyConfiguration {
	for i := range values {
		b.Env = append(b.Env, values[i])
	}
	return b
}

// WithChaincodeServerPort sets the ChaincodeServerPort field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the ChaincodeServerPort field is set to the value of the last call.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithChaincodeServerPort(value int) *FabricChaincodeTemplateSpecApplyConfiguration {
	b.ChaincodeServerPort = &value
	return b
}

// WithMspID sets the MspID field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the MspID field is set to the value of the last call.
func (b *FabricChaincodeTemplateSpecApplyConfiguration) WithMspID(value string) *FabricChaincodeTemplateSpecApplyConfiguration {
	b.MspID = &value
	return b
}
